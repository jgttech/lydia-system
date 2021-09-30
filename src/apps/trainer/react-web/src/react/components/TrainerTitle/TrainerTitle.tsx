import React from "react";
import { Row, Col } from "antd";
import companyIcon from "@assets/biggs-logo-small.jpg";
import aiIcon from "@assets/ai-icons-64.png";
import useStyles from "./TrainerTitle.jss";

export interface TrainerTitleProps {}

export const TrainerTitle = (props: TrainerTitleProps) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div>
                    <img className={classes.logo} src={companyIcon} />
                </div>
                <div className={classes.trainer}>
                    <img className={classes.aiImg} src={aiIcon} />
                    <span className={classes.aiTitle}>
                        {"AI Trainer"}
                    </span>
                </div>
            </div>
        </>
    );
}