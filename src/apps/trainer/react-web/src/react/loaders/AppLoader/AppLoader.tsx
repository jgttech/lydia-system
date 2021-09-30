import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import useStyles from "./AppLoader.jss";

export interface AppLoaderProps {}

export const AppLoader = (props: AppLoaderProps) => {
    const classes: any = useStyles();

    return (
        <div className={classes.loadingContainer}>
            <div>
                <LoadingOutlined className={classes.loadingIcon} />
            </div>
            <div className={classes.loadingMsg}>
                <span>
                    {"Loading..."}
                </span>
            </div>
        </div>
    );
}