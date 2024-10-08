"use client";

import { IInput } from "@/src/types";
import { Input, Textarea } from "@nextui-org/input";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

interface IProps extends IInput {}

const FXTextarea = ({
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

  const currentValue = useWatch({ name });
  return (
    <Textarea
      variant={variant}
      size={size}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      {...register(name)}
      required={required}
      type={type}
      defaultValue={""}
      minRows={4}
      label={label}
      placeholder={placeholder}
      value={currentValue || ""}
    />
  );
};

export default FXTextarea;
