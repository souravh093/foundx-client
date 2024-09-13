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

export default function ProfileDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name={"Sourave Halder"} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">
          <Link href="/profile/about">About</Link>
        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/profile/claim-request">Claim Request</Link>
        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/profile/create-post">Create Post</Link>
        </DropdownItem>
        <DropdownItem key="new">
          <Link href="/profile/settings">Settings</Link>
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
