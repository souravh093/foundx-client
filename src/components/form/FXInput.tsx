"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {}

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  placeholder,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      variant={variant}
      size={size}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      {...register(name)}
      required={required}
      type={type}
      defaultValue={""}
      label={label}
      placeholder={placeholder}
    />
  );
};

export default FXInput;
