import React, { useEffect } from "react";
import useStyles from "./EntityManager.jss";
import { Divider, Table, Button, Input, Select } from "antd";
import { AppLoader } from "@loaders/AppLoader/AppLoader";
import { EntityInput } from "@components/EntityInput/EntityInput";
import { Entity } from "@containers/Entity/Entity";
import { DeleteOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useMutation } from '@apollo/react-hooks';
import * as mutations from "@graphql/mutations";
import * as LA from "@actions/lexiconActions";
import * as EA from "@actions/modalEntityActions";
const { Option } = Select;

export interface EntityManagerProps {
    data: any
    entity: string
    entities: any | null
}

export const EntityManager = ({ data, entity="", entities=[] }: EntityManagerProps) => {
    const
    allEntities = entities,
    classes = useStyles(),
    dispatch = useDispatch(),
    add = mutations.createEntity,
    update = mutations.updateEntityLabel,
    remove = mutations.removeEntityLabel,
    [ addLabel, addStatus ] = useMutation(add.mutation),
    [ updateLabel, updateStatus ] = useMutation(update.mutation),
    [ removeLabel, removeStatus ] = useMutation(remove.mutation);

    let selectedLabel = allEntities[0].label;

    useEffect(() => {
        if (addStatus.data != null) {
            dispatch({
                type: LA.TOGGLE_REFETCH,
                refetch: true
            });

            dispatch({
                type: EA.TOGGLE_ENTITY_MODAL_REFETCH,
                refetch: true
            });
        }
    }, [ addStatus.data ]);

    useEffect(() => {
        if (updateStatus.data != null) {
            dispatch({
                type: LA.TOGGLE_REFETCH,
                refetch: true
            });

            dispatch({
                type: EA.TOGGLE_ENTITY_MODAL_REFETCH,
                refetch: true
            });
        }
    }, [ updateStatus.data ]);

    useEffect(() => {
        if (removeStatus.data != null) {
            dispatch({
                type: LA.TOGGLE_REFETCH,
                refetch: true
            });

            dispatch({
                type: EA.TOGGLE_ENTITY_MODAL_REFETCH,
                refetch: true
            });
        }
    }, [ removeStatus.data ]);

    return data == null ? (
        <>
            <div>
                <AppLoader />
            </div>
        </>
    ) : (() => {
        const
        { _id, input, entities } = data,
        hasEntity = () => {
            if (!input.includes(entity)) return false;
            else {
                const
                start = input.indexOf(entity),
                stop = start + entity.length;

                return entities.find(e =>
                    e.start === start &&
                    e.stop === stop
                ) != null;
            }
        };

        return (
            <>
                <div className={classes.container}>
                    <div className={classes.inputTitle}>
                        {"Training Input"}
                    </div>
                    <div>
                        {input}
                    </div>
                    <div className={classes.entityInput}>
                        <div className={classes.entityInputTitle}>
                            {"Add / Update an entity:"}
                        </div>
                        <Input
                            placeholder={"Type in an entity..."}
                            allowClear={true}
                            value={entity}
                            onChange={e => {
                                dispatch({
                                    type: EA.SET_ENTITY_MODAL_INPUT,
                                    entity: e.target.value
                                });
                            }}
                            addonAfter={(
                                <Select
                                    defaultValue={selectedLabel}
                                    onChange={value => {
                                        selectedLabel = value;
                                    }}
                                >
                                    {allEntities.map(({ label }, idx) => (
                                        <Option key={idx} value={label}>
                                            <Entity
                                                disable={true}
                                                entity={{ label, text: label }}
                                            />
                                        </Option>
                                    ))}
                                </Select>
                            )}
                        />
                    </div>
                    <div className={classes.entityInputControls}>
                        <Button
                            block
                            size="small"
                            icon={<PlusOutlined />}
                            disabled={entity.length <= 1 ? true : hasEntity() ? true : !input.includes(entity)}
                            style={{ marginRight: "0.5rem" }}
                            onClick={() => {
                                const
                                start = input.indexOf(entity),
                                stop = start + entity?.length;

                                dispatch({
                                    type: EA.SET_ENTITY_MODAL_INPUT,
                                    entity: ""
                                });

                                addLabel({
                                    variables: {
                                        _id,
                                        entity: {
                                            label: selectedLabel,
                                            start,
                                            stop
                                        }
                                    }
                                });

                                selectedLabel = allEntities[0].label;
                            }}
                        >
                            {"Add"}
                        </Button>
                        <Button
                            block
                            size="small"
                            icon={<UploadOutlined />}
                            disabled={entity.length <= 1 ? true : !hasEntity()}
                            onClick={() => {
                                const
                                start = input.indexOf(entity),
                                stop = start + entity?.length,
                                existingEntity = entities.find(e =>
                                    e.start === start &&
                                    e.stop === stop
                                );

                                if (existingEntity != null) {
                                    dispatch({
                                        type: EA.SET_ENTITY_MODAL_INPUT,
                                        entity: ""
                                    });

                                    updateLabel({
                                        variables: {
                                            _id,
                                            _entity: existingEntity._id,
                                            entity: {
                                                label: selectedLabel,
                                                start: existingEntity.start,
                                                stop: existingEntity.stop
                                            }
                                        }
                                    });

                                    selectedLabel = allEntities[0].label;
                                }
                            }}
                        >
                            {"Update"}
                        </Button>
                    </div>
                    <Divider style={{ amrgin: "0" }}>
                        {"Entities Table"}
                    </Divider>
                    <div className={classes.entityTable}>
                        <Table
                            scroll={{ y: 240 }}
                            size={"small"}
                            pagination={false}
                            dataSource={entities.map(({ _id, label, start, stop }, idx) => ({
                                key: idx,
                                text: input.substring(start, stop),
                                label,
                                _id
                            }))}
                            columns={[{
                                title: "Label",
                                dataIndex: "label",
                                render: label => (
                                    <Entity
                                        disable={true}
                                        entity={{ label, text: label }}
                                    />
                                )
                            }, {
                                title: "Entity",
                                dataIndex: "text",
                                render: text => `"${text}"`
                            }, {
                                key: "actions",
                                title: "Action(s)",
                                render: record => (
                                    <Button
                                        block
                                        danger
                                        size="small"
                                        shape="round"
                                        icon={<DeleteOutlined />}
                                        onClick={() => {
                                            removeLabel({
                                                variables: {
                                                    _id,
                                                    _entity: record._id
                                                }
                                            });
                                        }}
                                    >
                                        {"Delete"}
                                    </Button>
                                )
                            }]}
                        />
                    </div>
                </div>
            </>
        )
    })();
}