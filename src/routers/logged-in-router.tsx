import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { isLoggedInVar } from "../apollo";

const ME_QUERY = gql`
  query meQuery {
    me {
      id
      email
      role
      verified
    }
  }
`;

export const LoggedInRouter = () => {
  const { data, loading, error } = useQuery(ME_QUERY);
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
      <div>
        <h1>{data.me.email}</h1>
      </div>
    );
  }
};
