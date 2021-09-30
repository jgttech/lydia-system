import React from "react";
import loadable from "@loadable/component";
import { AppLoader } from "@loaders/AppLoader/AppLoader";

export const AsyncTrainerLayout = loadable(
    () => import("./TrainerLayout").then(({ TrainerLayout }) => TrainerLayout), {
        fallback: <AppLoader />
    }
);