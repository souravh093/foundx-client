import Container from "@/src/components/ui/Container";
import Post from "@/src/components/ui/Post";
import { getPost } from "@/src/hooks/post.hook";
import React from "react";

const ClaimRequestDetailsPage = async ({
  params: { itemId },
}: {
  params: { itemId: string };
}) => {
  const { data } = await getPost(itemId);

  return (
    <Container>
      <Post post={data} />
    </Container>
  );
};

export default ClaimRequestDetailsPage;
