import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="m-5">
      <h1 className="text-center text-2xl">Home Page</h1>
      <Card
        title="Noteworthy technology acquisitions 2021"
        content="Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order."
      />
    </div>
  );
};

export default Home;
