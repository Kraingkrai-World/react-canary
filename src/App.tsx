import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import AppContainer from "./routes";

// import { MyContext } from "./context/";

import { client } from "./services/gql";
import store from "./store/";

const App: React.FC = () => {
   return (
      <Provider store={store}>
         <ApolloProvider client={client}>
            <AppContainer />
         </ApolloProvider>
      </Provider>
   );
};

export default App;
