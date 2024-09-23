"use client"

import { useMutation } from "@tanstack/react-query";
import { claimRequest } from "../services/ClaimRequest";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

export const useCreateClaimReq = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["claim-request"],
    mutationFn: async (postData) => await claimRequest(postData),
    onSuccess: () => {
      toast.success("Claim request successfully send");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
