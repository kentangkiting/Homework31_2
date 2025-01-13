import React, { FC } from "react";
import { useLocation, useParams } from "react-router-dom";

interface IProps {}

const CommentUser: FC<IProps> = (props) => {
  const location = useLocation();
  const some = location.state;
  return (
    <>
      <div>Comment User</div>
      <p>this is comment user for user {some.userid}</p>
    </>
  );
};

export default CommentUser;
