"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import Link from "next/link";
import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";

export default function ProfileDropdown() {
  const { setLoading } = useUser();
  const handleLogout = () => {
    logout();

    setLoading(true);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name={"Sourave Halder"} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Link href="/profile">Profile</Link>
        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/profile/settings">Settings</Link>
        </DropdownItem>
        <DropdownItem
          onClick={handleLogout}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
