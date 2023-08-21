"use client";

import React from "react";

import { Label, Input, Button, CardDescription } from "@/components/ui";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface IProps {}

const SignUpForm: React.FC<IProps> = (props) => {
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
          <Label>First name</Label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label>Second name</Label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            {...register("lastName", { required: true })}
          />
        </div>
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
        <div className="flex flex-col space-y-1.5">
          <Label>Confirm password</Label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", { required: true })}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <CardDescription>
          {" "}
          Already have account?{" "}
          <Link href="/auth/login" className="font-bold">
            Login
          </Link>{" "}
        </CardDescription>
        <Button type="submit" onSubmit={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
