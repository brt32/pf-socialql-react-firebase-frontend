import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { username, images, about } = user;
  console.log(username);
  return (
    <div className="card text-center mt-5" style={{ minHeight: "375px" }}>
      <div className="card-body">
        <Image image={images[0]} />
        <Link to={`/user/${username}`}>
          <h4 className="text-primary">@{username}</h4>
        </Link>
        <hr />
        <small>{about}</small>
      </div>
    </div>
  );
};

export default UserCard;
