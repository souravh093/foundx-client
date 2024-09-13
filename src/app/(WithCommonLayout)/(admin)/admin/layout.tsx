import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div>adminlayout</div>
      {children}
    </>
  );
};

export default layout;
