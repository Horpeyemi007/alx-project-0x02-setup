import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="">
      <Header />
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-center text-4xl text-blue-500 font-bold">
          My Landing Page
        </h1>
      </main>
    </div>
  );
};

export default Home;
