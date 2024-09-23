import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/post";
import { toast } from "sonner";
import envConfig from "../config/envConfig";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["create-post"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post created Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};


export const getPost =  async (postId: string) => {
  const res= await fetch(`${envConfig.baseApi}/items/${postId}`, {
    cache: "no-store"
  })

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}
