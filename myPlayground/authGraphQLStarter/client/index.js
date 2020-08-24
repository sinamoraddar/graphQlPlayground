import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
//components
import LoginForm from "./components/loginForm/LoginForm";
import App from "./components/App";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: { credentials: "same-origin" },
});

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  networkInterface,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path={"/"} component={App}>
          <Route path={"login"} component={LoginForm} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
