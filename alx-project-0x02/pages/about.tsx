import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="p-10 space-y-4">
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
