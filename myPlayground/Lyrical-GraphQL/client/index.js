import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import SongList from "./components/songList/SongList";
import App from "./components/app/App";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import CreateSong from "./components/createSong/CreateSong";

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider {...{ client }}>
      <Router history={hashHistory}>
        <Route path={"/"} component={App}>
          <IndexRoute component={SongList} />
          <Route path={"song/new"} component={CreateSong} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
