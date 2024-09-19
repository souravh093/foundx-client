"use client";

import { useUser } from "@/src/context/user.provider";
import { NavbarItem } from "@nextui-org/navbar";
import React from "react";
import ProfileDropdown from "../../ui/profileDropdown";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const AuthDynamic = () => {
  const { user } = useUser();
  return (
    <>
      {user?.email ? (
        <NavbarItem>
          <ProfileDropdown />
        </NavbarItem>
      ) : (
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      )}
    </>
  );
};

export default AuthDynamic;
