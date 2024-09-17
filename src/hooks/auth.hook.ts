import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../services/AuthService";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["user_registration"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("User Created Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
