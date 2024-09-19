import Link from "next/link";
import React from "react";

type TOption = {
  path: string;
  label: string;
};

const SidebarOptions = ({ options }: { options: TOption[] }) => {
  return (
    <div className="bg-slate-900 py-5 flex flex-col gap-2 px-2">
      {options.map(({ label, path }: TOption, index: number) => (
        <Link
          key={index}
          href={path}
          className="hover:bg-gray-800 py-2 px-2 rounded-md transition duration-200"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

export default SidebarOptions;
