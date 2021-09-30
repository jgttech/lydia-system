import React, { useEffect } from "react";
import { Modal } from "antd";
import useStyles from "./EntityManagerModal.jss";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { CloseCircleOutlined } from "@ant-design/icons";
import * as queries from "@graphql/queries";
import * as EA from "@redux/actions/modalEntityActions";
import * as LA from "@redux/actions/lexiconActions";
import { EntityManager } from "@components/EntityManager/EntityManager";

export interface EntityManagerModalProps {}

export const EntityManagerModal = (props: EntityManagerModalProps) => {
    const
    classes = useStyles(),
    dispatch = useDispatch(),
    { refetch, show, lexicon, search, data, entity } = useSelector(({ modalEntity }) => modalEntity),
    { entities } = useSelector(({ lexicons }) => lexicons);

    const
    { typename, query } = queries[lexicon != null
        ? "getLexiconById"
        : search != null
            ? "getLexiconByInput"
            : "getLexiconById"
    ],
    lexiconQuery = useQuery(query, {
        variables: {
            _id: lexicon,
            input: search
        },
        skip: !show,
        pollInterval: show ? 500 : 0
    });

    useEffect(() => {
        if (refetch) {
            dispatch({
                type: EA.TOGGLE_ENTITY_MODAL_REFETCH,
                refetch: false
            });
            lexiconQuery.refetch();
        }
    }, [ refetch ]);

    useEffect(() => {
        if (lexiconQuery.data != null)
            dispatch({
                typename,
                type: EA.SET_ENTITY_MODAL_DATA,
                payload: lexiconQuery.data
            });
    }, [ lexiconQuery.data ]);

    return (
        <>
            <Modal
                destroyOnClose={true}
                centered
                title={"Entity Manager"}
                visible={show}
                footer={null}
                closeIcon={<CloseCircleOutlined />}
                onCancel={() => {
                    setTimeout(() => {
                        dispatch({
                            type: LA.TOGGLE_REFETCH,
                            refetch: true
                        });
                        dispatch({
                            type: EA.TOGGLE_MODEL_ENTITY,
                            lexicon: null
                        });
                        dispatch({
                            typename,
                            type: EA.SET_ENTITY_MODAL_DATA,
                            payload: null
                        });
                    }, 100);
                }}
            >
                <EntityManager
                    data={data}
                    entity={entity}
                    entities={entities}
                />
            </Modal>
        </>
    )
}