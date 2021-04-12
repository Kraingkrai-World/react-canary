import React from "react";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";

import AppContainer from "./core/app/route";
import {client} from "./core/utils/gql";
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
