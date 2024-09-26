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

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const currentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decoded = null;

  if (accessToken) {
    decoded = await jwtDecode(accessToken);

    return {
      _id: decoded?._id,
      name: decoded?.name,
      email: decoded?.email,
      mobileNumber: decoded?.mobileNumber,
      role: decoded?.role,
      status: decoded?.status,
      profilePhoto: decoded?.profilePhoto,
    };
  }

  return decoded;
};


export const getNewAccessToken = async () => {
  const refreshToken = cookies().get("refreshToken")?.value;

  try {
    const { data } = await axiosInstance({
      method: "POST",
      url: "/auth/refresh-token",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      }
    })

    return data;
  } catch (error: any) {
    throw new Error("Failed to get new access token");
  }
}