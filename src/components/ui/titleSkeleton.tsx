import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function TitleSkeleton() {
  return (
    <div className="max-w-[300px] w-full flex items-center gap-3">  
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg"/>
        <Skeleton className="h-3 w-2/5 rounded-lg"/>
      </div>
    </div>
  );
}
