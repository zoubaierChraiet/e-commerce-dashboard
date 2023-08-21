import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import LoginForm from "@/components/shared/forms/LoginForm";
import Link from "next/link";

interface IProps {}

const Login: React.FC<IProps> = (props) => {
  return (
    <div className="w-full h-full px-8 md:p-0">
      <Card className="w-full md:w-[500px] mx-auto mt-32">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Please enter your login information</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex justify-between">
          <CardDescription>
            {" "}
            do not have account?{" "}
            <Link href="/auth/signup" className="font-bold">
              Sign up
            </Link>{" "}
          </CardDescription>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
