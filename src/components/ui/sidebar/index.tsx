"use client";
import { useUser } from "@/src/context/user.provider";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarOptions from "./SidebarOptions";
import { adminLinks, userLinks } from "./constant";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <aside className="col-span-1 flex flex-col gap-10">
      <div className="bg-slate-900">
        <Image
          src={user?.profilePhoto as string}
          alt="profile"
          width={400}
          height={400}
          className="object-cover "
        />
        <div className="mt-5 p-2">
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>

        <Link
          href="/profile/create-post"
          className="flex items-center justify-center py-2 my-2 mx-2 rounded-md hover:bg-gray-700 cursor-pointer bg-slate-800"
        >
          Create a Post
        </Link>
      </div>

      <SidebarOptions
        options={user?.role === "USER" ? userLinks : adminLinks}
      />
    </aside>
  );
};

export default Sidebar;
