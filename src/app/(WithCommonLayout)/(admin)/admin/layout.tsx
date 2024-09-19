import Container from "@/src/components/ui/Container";
import Sidebar from "@/src/components/ui/sidebar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="grid grid-cols-4 gap-10">
      <Sidebar />
      <main className="col-span-3">{children}</main>
    </Container>
  );
};

export default layout;
