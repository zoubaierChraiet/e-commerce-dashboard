import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import LoginForm from "@/components/shared/forms/LoginForm";

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
      </Card>
    </div>
  );
};

export default Login;
