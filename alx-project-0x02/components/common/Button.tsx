import React from "react";
import { ButtonProps } from "@/interfaces";
import { sizeClasses } from "@/constants";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  shape = "rounded-md",
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ${sizeClasses[size]} ${shape} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
