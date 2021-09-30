import React, { useEffect } from "react";
import { message } from "antd";
import * as mutation from "@graphql/mutations";
import * as A from "@actions/lexiconActions";
import { useDispatch } from "react-redux";

const defaultDuration: number = 2;

export const
lexiconRemovalNotifications = (status, key, duration=defaultDuration) => {
    const
    dispatch = useDispatch(),
    { typename } = mutation.removeLexicon,
    { called=false, loading=false, data=null } = status;

    useEffect(() => {
        if (called && !loading && data != null) {
            const { code=null } = data[typename];

            if (code != null && code === 200) {
                dispatch({
                    type: A.TOGGLE_REFETCH
                });

                message.success({
                    content: 'Successfully removed',
                    duration,
                    key,
                });
            } else {
                message.warning({
                    content: 'Not removed, please try again later...',
                    duration,
                    key,
                });
            }
        }
    }, [ status ]);
},

leixconAddNotifications = (status, key, duration=defaultDuration) => {
    const
    dispatch = useDispatch(),
    { typename } = mutation.createLexicon,
    { called=false, loading=false, data=null } = status;

    useEffect(() => {
        if (called && !loading && data != null) {
            const { code=null } = data[typename];

            if (code != null && code === 200) {
                dispatch({
                    type: A.TOGGLE_REFETCH
                });

                message.success({
                    content: 'Successfully added',
                    duration,
                    key,
                });
            } else {
                message.warning({
                    content: 'Not added, please try again later...',
                    duration,
                    key,
                });
            }
        }
    }, [ status ]);
}