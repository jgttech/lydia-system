import React, { useEffect } from "react";
import { Popover, Select, Button } from "antd";
import useStyles from "./Entity.jss";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from '@apollo/react-hooks';
import { DeleteOutlined } from "@ant-design/icons";
import * as mutations from "@graphql/mutations";
import * as LA from "@actions/lexiconActions";
const { Option } = Select;

interface IEntity {
    text?: string
    _id?: string
    label?: string
    start?: number
    stop?: number
}

export interface EntityProps {
    disable?: boolean
    _id?: string
    entity: IEntity
}

export const Entity = ({
    disable=false,
    _id,
    entity
}: EntityProps) => {
    const
    dispatch = useDispatch(),
    entities = useSelector(({ lexicons }) => lexicons.entities),
    classes = useStyles([ entities || [], entity.label ]),
    update = mutations.updateEntityLabel,
    remove = mutations.removeEntityLabel,
    [ updateLabel, updateStatus ] = useMutation(update.mutation),
    [ removeLabel, removeStatus ] = useMutation(remove.mutation);

    return disable ? (
        <>
            <span className={classes.entity}>
                {entity.text}
            </span>
        </>
    ) : (
        <>
            <Popover
                trigger="click"
                placement="top"
                title={(
                    <span className={classes.popoverTitle}>
                        {"Update Label"}
                    </span>
                )}
                content={(
                    <div>
                        <div className={classes.labelContainer}>
                            <Select
                                size="small"
                                defaultValue={entity.label}
                                className={classes.labelSelect}
                                onChange={value => {
                                    const data = {...entity, label: value };

                                    updateLabel({
                                        variables: {
                                            _id,
                                            _entity: data._id,
                                            entity: {
                                                label: data.label,
                                                start: data.start,
                                                stop: data.stop
                                            }
                                        }
                                    });

                                    dispatch({
                                        type: LA.TOGGLE_REFETCH,
                                        refetch: true
                                    });
                                }}
                            >
                                {entities.map(({ label }, idx) => (
                                    <Option key={idx} value={label}>
                                        {label}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                        <div>
                            <Button
                                block
                                danger
                                size="small"
                                type="primary"
                                icon={<DeleteOutlined />}
                                onClick={() => {
                                    removeLabel({
                                        variables: {
                                            _id,
                                            _entity: entity._id
                                        }
                                    });

                                    dispatch({
                                        type: LA.TOGGLE_REFETCH,
                                        refetch: true
                                    });
                                }}
                            >
                                {"Delete"}
                            </Button>
                        </div>
                    </div>
                )}
            >
                <span className={classes.entity}>
                    {entity.text}
                </span>
            </Popover>
        </>
    );
}