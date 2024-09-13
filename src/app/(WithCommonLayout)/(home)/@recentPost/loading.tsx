import React from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Container from "@/src/components/ui/Container";
import TitleSkeleton from "@/src/components/ui/titleSkeleton";
import CardSkeleton from "@/src/components/ui/cardSkeleton";

const loading = async () => {
  return (
    <Container>
      <div className="flex items-center justify-center">
      <TitleSkeleton />
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {[...Array(8)].map((_idx) => (
         <CardSkeleton key={_idx} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default" size="md">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default loading;
