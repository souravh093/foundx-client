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
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const router = useRouter();
  const { setLoading, user } = useUser();
  const handleLogout = () => {
    logout();
    setLoading(true);
    router.push("/");
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
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
