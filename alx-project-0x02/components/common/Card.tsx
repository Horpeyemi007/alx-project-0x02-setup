import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="block max-w-sm p-6 border border-gray-200 rounded-lg">
      <h5 className="mb-2 text-2xl font-bold text-gray-500">{title}</h5>
      <p className="font-normal text-gray-500">{content}</p>
    </div>
  );
};

export default Card;
