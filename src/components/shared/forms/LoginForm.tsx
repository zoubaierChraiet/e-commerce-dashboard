"use client";

import React from "react";

import { Label, Input } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

interface IProps {}

const LoginForm: React.FC<IProps> = (props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label>Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
