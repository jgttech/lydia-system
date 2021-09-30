import "@babel/register";
import "antd/dist/antd.less";
import React from "react";
import store from "./redux/store";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { App } from "./react/containers/App/App";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache} from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";

const
{ GATEWAY } = ENV,
client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        fetch,
        uri: GATEWAY,
    })
});

render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Provider>,
    document.querySelector("#app")
);