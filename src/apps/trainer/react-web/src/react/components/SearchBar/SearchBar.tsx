import React from "react";
import useStyles from "./SearchBar.jss";
import * as LA from "@actions/lexiconActions";
import { Input, Checkbox, Popover, Tooltip } from "antd";
import { Entity } from "@containers/Entity/Entity";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

const
{ Search } = Input;

export interface SearchBarProps {
    loading?: boolean
    search?: string
    exactMatch?: boolean
    entities?: Array<any>
}

export const SearchBar = ({
    loading=false,
    exactMatch=false,
    search="",
    entities=[],
}: SearchBarProps) => {
    const
    classes = useStyles(),
    dispatch = useDispatch();

    return (
        <>
            <div style={{ width: "100%", marginBottom: "0.5rem", cursor: "default" }}>
                <Popover
                    trigger="click"
                    content={() => {
                        return entities.map(({ label }, idx) => {
                            let margin = "8px 0px";

                            if (idx === 0)
                                margin = "0px 0px 8px 0px";
                            else if(idx === (entities.length - 1))
                                margin = "8px 0px 0px 0px";

                            return (
                                <div key={idx} style={{ margin }}>
                                    <Entity
                                        disable={true}
                                        entity={{ label, text: label }}
                                    />
                                </div>
                            )
                        });
                    }}
                >
                    <span className={classes.info}>
                        <InfoCircleOutlined />
                        {" Color codes"}
                    </span>
                </Popover>
            </div>
            <div style={{ width: "100%" }}>
                <Search
                    allowClear
                    enterButton
                    loading={loading}
                    value={search}
                    placeholder={"Search for database input(s)..."}
                    onPressEnter={(e: any) => {
                        dispatch({
                            type: LA.SET_LEXICONS_SEARCH,
                            search: e.target.value
                        });
                        dispatch({
                            type: LA.TOGGLE_REFETCH
                        });
                    }}
                    onSearch={(search: string) => {
                        dispatch({
                            type: LA.SET_LEXICONS_SEARCH,
                            search
                        });
                        dispatch({
                            type: LA.TOGGLE_REFETCH
                        });
                    }}
                    onChange={e => {
                        dispatch({
                            type: LA.SET_LEXICONS_SEARCH,
                            search: e.target.value
                        });
                        dispatch({
                            type: LA.TOGGLE_REFETCH
                        });
                    }}
                />
            </div>
            <div style={{ width: "100%", marginTop: "0.5rem" }}>
                <Checkbox
                    checked={exactMatch}
                    onChange={() => {
                        dispatch({
                            type: LA.TOGGLE_OPTIONS_EXACT_MATCH
                        });
                        dispatch({
                            type: LA.TOGGLE_REFETCH
                        });
                    }}
                >
                    <span className={classes.text}>
                        {"Exact match"}
                    </span>
                </Checkbox>
            </div>
        </>
    );
}