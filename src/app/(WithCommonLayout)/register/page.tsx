"use client";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidationSchema } from "@/src/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { registerUser } from "@/src/services/AuthService";

const RegisterPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png",
    };

    console.log("check user data", userData)
    await registerUser(userData);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(registerValidationSchema)}
        >
          <div className="py-3">
            <FXInput name="name" label="Name" />
          </div>
          <div className="py-3">
            <FXInput name="mobileNumber" label="Mobile Number" />
          </div>
          <div className="py-3">
            <FXInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FXInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </FXForm>
        <div className="text-center">
          Already have account ? <Link href={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
