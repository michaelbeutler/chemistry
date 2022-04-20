import React, { ReactChild } from "react";

export interface ContainerProps {
  children: ReactChild | ReactChild[];
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container mx-auto sm:px-6 lg:px-8">{children}</div>;
};

export default Container;
