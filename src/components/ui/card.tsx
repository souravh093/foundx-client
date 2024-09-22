import { TPOst } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card as NextUICard, CardFooter, CardHeader } from "@nextui-org/card";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

export default function Card({ data }: { data: TPOst }) {
  const { title, category, images, city, dateFound, _id } = data || {};
  return (
    <NextUICard isFooterBlurred radius="lg" className="border-none">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="absolute -top-0 right-1 rounded-full bg-black px-2 text-tiny uppercase text-white/90">
          {category?.name}
        </p>
        <h4 className="mt-2 rounded bg-black/30 p-1 text-2xl font-medium text-white">
          {title}
        </h4>
      </CardHeader>
      <Image
        alt="Woman listing to music"
        className="object-cover scale-120 z-0 h-[200px] w-full -translate-y-6"
        height={200}
        src={images[0]}
        width={200}
      />
      <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
        <div>
          <p className="text-tiny text-black">{city}</p>
          <p className="text-tiny text-black">
            {format(new Date(dateFound), "dd MMMM, yyyy")}
          </p>
        </div>

        <Button
          className="bg-black text-tiny text-white"
          radius="full"
          size="sm"
        >
          Details
        </Button>
      </CardFooter>
    </NextUICard>
  );
}
