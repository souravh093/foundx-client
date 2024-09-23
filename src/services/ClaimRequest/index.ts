"use server";

import { axiosInstance } from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const claimRequest = async (formData: FieldValues): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/claim-request", formData);
    console.log(data)
    revalidateTag("claim-request");

    return data;
  } catch (errors: any) {
    throw new Error(errors.message);
  }
};
