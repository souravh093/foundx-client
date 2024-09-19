import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: ReactNode;
}) => {
  return (
    <div
      className={`container mx-auto max-w-7xl pt-16 px-6 flex-grow ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
