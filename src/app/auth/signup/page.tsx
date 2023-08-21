import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import SignUpForm from "@/components/shared/forms/SignUpForm";

interface IProps {}

const SignUp: React.FC<IProps> = (props) => {
  return (
    <div className="w-full h-full px-8 md:p-0">
      <Card className="w-full md:w-[500px] mx-auto mt-32">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Please enter your account personal information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
