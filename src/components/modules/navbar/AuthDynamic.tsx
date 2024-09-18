"use client";

import { useUser } from "@/src/context/user.provider";
import { NavbarItem } from "@nextui-org/navbar";
import React from "react";
import ProfileDropdown from "../../ui/profileDropdown";
import Link from "next/link";

const AuthDynamic = () => {
  const { user } = useUser();
  return (
    <>
      {user?.email ? (
        <NavbarItem>
          <ProfileDropdown />
        </NavbarItem>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export default AuthDynamic;
