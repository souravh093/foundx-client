import React, { ReactNode } from "react";

const layout = ({
  children,
  recentPost,
  landing,
}: {
  children: ReactNode;
  recentPost: ReactNode;
  landing: ReactNode;
}) => {
  return (
    <>
      {children}
      {landing}
      {recentPost}
    </>
  );
};

export default layout;
