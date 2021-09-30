import React, { useEffect } from "react";
import { Modal, Button } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { AppLoader } from "@loaders/AppLoader/AppLoader";
import { EntityInput } from "@components/EntityInput/EntityInput";
import useStyles from "./PeekModal.jss";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import * as queries from "@graphql/queries";
import * as PA from "@redux/actions/modalPeekActions";

export interface PeekModalProps {}

export const PeekModal = (props: PeekModalProps) => {
    const
    classes = useStyles(),
    dispatch = useDispatch(),
    { show, lexicon, data } = useSelector(({ modalPeek }) => modalPeek);

    const
    { typename, query } = queries.getLexiconById,
    lexiconQuery = useQuery(query, {
        variables: { _id: lexicon },
        skip: !show
    });

    useEffect(() => {
        if (lexiconQuery.data != null)
            dispatch({
                typename,
                type: PA.SET_PEEK_MODAL_DATA,
                payload: lexiconQuery.data
            });
    }, [ lexiconQuery.data ]);

    return (
        <>
            <Modal
                centered
                title={null}
                footer={null}
                closable={false}
                visible={show}
            >
                {data == null ? (
                    <>
                        <div>
                            <AppLoader />
                        </div>
                    </>
                ) : (() => {
                    const { _id, input, entities } = data;

                    return (
                        <>
                            <div className={classes.nomenclature}>
                                <span className={classes.id}>
                                    {"ID: "}
                                </span>
                                {_id}
                            </div>
                            <div className={classes.input}>
                                <EntityInput
                                    _id={_id}
                                    input={input}
                                    entities={entities}
                                    disable={true}
                                />
                            </div>
                            <Button
                                block
                                onClick={() => {
                                    setTimeout(() => {
                                        dispatch({
                                            type: PA.TOGGLE_MODEL_PEEK,
                                            lexicon: null
                                        });
                                        dispatch({
                                            typename,
                                            type: PA.SET_PEEK_MODAL_DATA,
                                            payload: null
                                        });
                                    }, 100);
                                }}
                            >
                                {"Ok"}
                            </Button>
                        </>
                    )
                })()}
            </Modal>
        </>
    );
}