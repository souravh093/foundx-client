import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import React from "react";

export default function CardSkeleton() {
  return (
    <Skeleton className="rounded-lg">
      <Card className="w-full h-[200px]">
        <CardHeader className="absolute top-1 z-10 flex-col items-start">
          <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90"></p>
          <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white"></h4>
        </CardHeader>
        <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
          <div>
            <p className="text-tiny text-black"></p>
            <p className="text-tiny text-black"></p>
          </div>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}
