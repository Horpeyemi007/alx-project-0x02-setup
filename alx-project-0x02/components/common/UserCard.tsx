import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white space-y-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <div className="text-sm text-gray-500">
        <strong>Address:</strong> {address.street}
      </div>
    </div>
  );
};

export default UserCard;
