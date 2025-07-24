import React, { useEffect, useState } from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching from JSONPlaceholder
    fetch("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        const formattedUsers = data.map((user: UserProps) => ({
          name: user.name,
          email: user.email,
          address: user.address,
        }));
        setUsers(formattedUsers);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="p-6 max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {loading ? (
          <p className="text-gray-500">Loading users...</p>
        ) : (
          users.map((user, index) => <UserCard key={index} {...user} />)
        )}
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   // await
//   return {
//     data: [],
//   };
// }

export default Users;
