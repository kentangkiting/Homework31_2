import React, { FC } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

interface IProps {}

const UserDetail: FC<IProps> = (props) => {
  const { userid } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>UserDetail</div>
      <p style={{ display: "inline" }}>this is user {userid} a </p>
      <button onClick={() => navigate(`a`)}>Post User a</button>
      <br />
      <p style={{ display: "inline" }}>this is user {userid} b </p>
      <button onClick={() => navigate(`b`)}>Post User b</button>
      <br />
      <button onClick={() => navigate(`comment`)}>Comment User</button>

      <Outlet />
    </>
  );
};

export default UserDetail;
