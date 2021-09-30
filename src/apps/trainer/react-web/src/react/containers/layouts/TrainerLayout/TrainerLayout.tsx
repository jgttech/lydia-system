import React from "react";
import useStyles from "./TrainerLayout.jss";
import { SearchLayout } from "@react/containers/layouts/SearchLayout/SearchLayout";
import { TrainerTitle } from "@components/TrainerTitle/TrainerTitle";
import { EntityManagerModal } from "@containers/EntityManagerModal/EntityManagerModal";
import { PeekModal } from "@containers/PeekModal/PeekModal";

export interface TrainerLayoutProps {}

export const TrainerLayout = (props: TrainerLayoutProps) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.section}>
                    <EntityManagerModal />
                    <PeekModal />
                    <TrainerTitle />
                    <SearchLayout />
                </div>
            </div>
        </>
    );
}