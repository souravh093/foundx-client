import { useMutation } from "@tanstack/react-query";
import { createPost } from "../services/post";
import { toast } from "sonner";

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
