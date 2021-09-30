import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AsyncTrainerLayout } from "@layouts/TrainerLayout/AsyncTrainerLayout";

export interface AppRouterProps {}

export const AppRouter = (props: AppRouterProps) => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={AsyncTrainerLayout} exact />
            </Switch>
        </Router>
    );
}