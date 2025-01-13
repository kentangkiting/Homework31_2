import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface IProps {}

const CommentUser: FC<IProps> = (props) => {
  const { userid } = useParams();
  return (
    <>
      <div>Comment User</div>
      <p>this is comment user for user {userid}</p>
    </>
  );
};

export default CommentUser;
