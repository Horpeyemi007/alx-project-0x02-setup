import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-500">
      <div className="flex justify-between items-center p-6 w-full text-white">
        <Link href="/">
          <h1 className="text-4xl font-bold">ALX</h1>
        </Link>

        <nav className="flex space-x-6 font-semibold">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/users">Users</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
