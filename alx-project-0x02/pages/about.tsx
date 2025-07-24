import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div className="space-y-4">
      <Header />
      <h1 className="text-2xl font-semi-bold mb-4">About Page</h1>

      <div className=" flex flex-col space-y-3 w-2xs">
        <Button size="small" shape="rounded-sm">
          Small Rounded-sm
        </Button>

        <Button size="medium" shape="rounded-md">
          Medium Rounded-md
        </Button>

        <Button size="large" shape="rounded-full">
          Large Rounded-full
        </Button>
      </div>
    </div>
  );
};

export default About;
