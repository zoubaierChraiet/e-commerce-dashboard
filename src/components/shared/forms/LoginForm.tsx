"use client";

import React from "react";

import { Label, Input, Button, CardDescription } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";

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
      <div className="flex justify-between mt-4">
        <CardDescription
          className="cursor-pointer"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          {" "}
          Sign with google{" "}
        </CardDescription>
      </div>
      <div className="flex justify-between mt-4">
        <CardDescription>
          {" "}
          do not have account?{" "}
          <Link href="/auth/signup" className="font-bold">
            Sign up
          </Link>{" "}
        </CardDescription>
        <Button type="submit" onSubmit={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
