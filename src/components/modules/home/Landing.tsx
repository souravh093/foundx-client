import { Input } from "@nextui-org/input";
import { input } from "@nextui-org/theme";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/mobile.jpg')] bg-cover bg-center">
      <div className="max-w-2xl pt-32 mx-auto">
        <form className="flex-1">
          <Input 
            aria-label="Search"
            className="bg-default-100 text-sm rounded-xl"
            labelPlacement="outside"
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base" />
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
