import React, { FC } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

interface IProps {}

const UserPage: FC<IProps> = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  let currentLink = "";
  const locationscomponent = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div style={{ display: "inline" }} key={crumb}>
          <Link to={currentLink}>{`${crumb}>`}</Link>
        </div>
      );
    });
  return (
    <>
      <div>User Page</div>
      {locationscomponent}
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
