import React, { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";

interface IProps {}

const UserPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>User Page</div>
      <ul>
        <li onClick={() => navigate(`/user/${1}`)}>user1</li>
        <li onClick={() => navigate(`/user/${2}`)}>user2</li>
        <li onClick={() => navigate(`/user/${3}`)}>user3</li>
        <li onClick={() => navigate(`/user/${4}`)}>user4</li>
      </ul>
      <Outlet />
    </>
  );
};

export default UserPage;
