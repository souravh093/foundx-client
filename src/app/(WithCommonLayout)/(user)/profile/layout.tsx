import Container from "@/src/components/ui/Container";
import Sidebar from "@/src/components/ui/sidebar";

import React, { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Container className="grid grid-cols-4 gap-10">
        <Sidebar />
        <main className="col-span-3">{children}</main>
      </Container>
    </div>
  );
};

export default ProfileLayout;
