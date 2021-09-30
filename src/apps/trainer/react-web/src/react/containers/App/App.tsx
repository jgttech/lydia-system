import React from "react";
import { AppRouter } from "@routes/AppRouter/AppRouter";

export interface AppProps {}

export const App = (props: AppProps) => (
    <>
        <AppRouter />
    </>
);