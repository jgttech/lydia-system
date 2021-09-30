import React from "react";
import { List, Skeleton, Button, message, Card, Badge } from "antd";
import { FrownOutlined, EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined } from "@ant-design/icons";
import { AppLoader } from "@loaders/AppLoader/AppLoader";
import { EntityInput } from "@components/EntityInput/EntityInput";
import { ConfirmationModal } from "@components/ConfirmationModal/ConfirmationModal";
import { useDispatch } from "react-redux";
import useStyles from "./SearchResults.jss";
import * as LA from "@actions/lexiconActions";
import * as EA from "@actions/modalEntityActions";
import * as PA from "@actions/modalPeekActions";

export interface SearchResultsProps {
    loading?: boolean
    search?: string
    lexicons?: Array<any>
    removeLexiconId: string
    showConfirm: boolean
    removeLexicon: Function
    addLexicon: Function
    removalMsgKey?: string
    addMsgKey?: string
}

const
getLexiconId = id =>
    document
    .getElementById(id)
    ?.getAttribute("id");

export const SearchResults = ({
    loading=false,
    search="",
    showConfirm=false,
    removeLexiconId,
    lexicons=[],
    removeLexicon,
    addLexicon,
    removalMsgKey,
    addMsgKey
}: SearchResultsProps) => {
    const
    classes = useStyles(),
    dispatch = useDispatch();

    return loading
    ? (
        <>
            <div className={classes.container}>
                <AppLoader />
            </div>
        </>
    )
    : lexicons.length === 0
        ? search.length === 0
            ? (
                <div className={classes.container}>
                    <div className={classes.icon}>
                        <FrownOutlined />
                    </div>
                    <div className={classes.content}>
                        {"No records"}
                    </div>
                </div>
            )
            : (
                <div className={classes.container}>
                    <Button
                        block
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => {
                            message.loading({
                                content: `Adding data...`,
                                key: addMsgKey
                            });

                            addLexicon({ variables: {
                                input: search
                            }});

                            dispatch({
                                type: LA.TOGGLE_REFETCH,
                                refetch: true
                            });

                            dispatch({
                                type: EA.TOGGLE_MODEL_ENTITY,
                                search,
                                show: true
                            });

                            dispatch({
                                type: LA.SET_LEXICONS_SEARCH,
                                search: ""
                            });
                        }}
                    >
                        {"Add input"}
                    </Button>
                </div>
            )
        : (
            <>
                <ConfirmationModal
                    visible={showConfirm}
                    title={null}
                    message="Are you sure?"
                    onOk={() => {
                        message.loading({
                            content: `Removing data...`,
                            key: removalMsgKey
                        });

                        dispatch({
                            type: LA.TOGGLE_MODEL_CONFIRM,
                            lexicon: null
                        });

                        removeLexicon({ variables: { _id: removeLexiconId }});
                    }}
                    onCancel={() => {
                        dispatch({
                            type: LA.TOGGLE_MODEL_CONFIRM,
                            lexicon: null
                        });
                    }}
                />
                <div className={classes.container}>
                    <List
                        itemLayout="horizontal"
                        loading={loading}
                        dataSource={lexicons}
                        renderItem={({ _id, input, entities }) => {
                            return (
                                <div id={_id}>
                                    <List.Item>
                                        <Badge
                                            showZero={true}
                                            count={entities.length}
                                            className={classes.badge}
                                            title="Number of entities"
                                            style={{
                                                backgroundColor: entities.length > 0
                                                    ? "rgb(82, 191, 28)"
                                                    : "rgb(180, 180, 180)"
                                            }}
                                        >
                                            <Card
                                                style={{ width: "100%" }}
                                                actions={[
                                                    <EditOutlined key="edit" onClick={() => {
                                                        dispatch({
                                                            type: EA.TOGGLE_MODEL_ENTITY,
                                                            lexicon: getLexiconId(_id),
                                                            show: true
                                                        });
                                                    }} />,
                                                    <DeleteOutlined key="remove" onClick={() => {
                                                        dispatch({
                                                            type: LA.TOGGLE_MODEL_CONFIRM,
                                                            lexicon: getLexiconId(_id),
                                                            show: true
                                                        });
                                                    }} />,
                                                    <EyeOutlined key="peek"  onClick={() => {
                                                        dispatch({
                                                            type: PA.TOGGLE_MODEL_PEEK,
                                                            lexicon: getLexiconId(_id),
                                                            show: true
                                                        });
                                                    }} />
                                                ]}
                                            >
                                                <Skeleton title={false} loading={loading} active>
                                                    <Card.Meta
                                                        title={
                                                            <div className={classes.title}>
                                                                {input}
                                                            </div>
                                                        }
                                                        description={
                                                            <div className={classes.description}>
                                                                <b>{"ID: "}</b>
                                                                {_id}
                                                            </div>
                                                        }
                                                    />
                                                </Skeleton>
                                            </Card>
                                        </Badge>
                                    </List.Item>
                                </div>
                            );
                        }}
                    />
                </div>
            </>
        );
}