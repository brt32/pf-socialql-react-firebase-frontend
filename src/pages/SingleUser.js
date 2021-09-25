import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import { PUBLIC_PROFILE } from "../graphql/queries";

const SingleUser = () => {
  let params = useParams();

  const { loading, data } = useQuery(PUBLIC_PROFILE, {
    variables: { username: params.username },
  });

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <div className="container">
      <UserCard user={data.publicProfile} />
    </div>
  );
};

export default SingleUser;
