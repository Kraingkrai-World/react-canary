import React from "react";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";

import AppContainer from "./routes";
import {client} from "./core/app/gql";
import store from "./store/";

const App: React.FunctionComponent = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <AppContainer/>
            </ApolloProvider>
        </Provider>
    );
};

export default App;
