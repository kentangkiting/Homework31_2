import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface IProps {}

const PostUser: FC<IProps> = (props) => {
  const { userid, userpost } = useParams();
  return (
    <>
      <div>Post User</div>
      <p>
        this is post user for user {userid} and type {userpost}
      </p>
    </>
  );
};

export default PostUser;
