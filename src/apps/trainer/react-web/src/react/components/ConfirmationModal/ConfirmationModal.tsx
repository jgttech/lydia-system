import React from "react";
import { Modal } from "antd";
import useStyles from "./ConfirmModel.jss";

export interface ConfirmationModalProps {
    title?: string | null
    message: string
    visible: boolean
    onOk?: Function
    onCancel?: Function
}

export const ConfirmationModal = ({ title, visible=false, message, onOk, onCancel }: ConfirmationModalProps) => {
    const classes = useStyles();

    return (
        <>
            <Modal
                centered
                title={title || null}
                visible={visible}
                closable={false}
                okText={"Confirm"}
                onOk={() => {
                    if (onOk != null)
                        onOk();
                }}
                onCancel={() => {
                    if (onCancel != null)
                        onCancel();
                }}
            >
                <div className={classes.container}>
                    {message}
                </div>
            </Modal>
        </>
    )
}