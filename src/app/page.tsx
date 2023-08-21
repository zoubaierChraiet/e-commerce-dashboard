"use client";

import React from "react";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Home: React.FC = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <div>Loading....</div>;
  }

  if (status === "unauthenticated") {
    redirect("/auth/login");
  }

  return <div>Home</div>;
};

export default Home;
