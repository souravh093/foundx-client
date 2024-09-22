import Container from "@/src/components/ui/Container";
import Post from "@/src/components/ui/Post";
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { TPOst } from "@/src/types";

export default async function FoundItems() {
  const { data } = await axiosInstance.get(`/items`);

  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: TPOst) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}
