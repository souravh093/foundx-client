"use server";

import { axiosInstance } from "@/src/lib/AxiosInstance";
import { TUser } from "@/src/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const currentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decoded: Partial<TUser> | null = null;

  if (accessToken) {
    decoded = await jwtDecode(accessToken);

    return {
      _id: decoded?._id,
      name: decoded?.name,
      email: decoded?.email,
      mobileNumber: decoded?.mobileNumber,
      role: decoded?.role,
      status: decoded?.status,
    };
  }

  return decoded;
};
