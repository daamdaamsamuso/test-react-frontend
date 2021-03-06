import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "../components/header";
import { useMe } from "../hook/useMe";
import { NotFound } from "../pages/404";
import { Restaurants } from "../pages/client/restaurants";
import { ConfirmEmail } from "../pages/user/confirm-email";
  
const ClientRoutes = [
  <Route key="1" path="/" exact>
    <Restaurants />
  </Route>,
  <Route key="2" path="/confirm" exact>
  <ConfirmEmail />
</Route>,
];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return (
      <div>
        <div className="h-screen flex justify-center items-center">
          <span className="font-medium text-xl tracking-wide">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <Router>
        <Header />
        <Switch>
          {data.me.role === "Client" && ClientRoutes}
          <Route>
          <NotFound />
        </Route>
        </Switch>
      </Router>
    );
  }
};
