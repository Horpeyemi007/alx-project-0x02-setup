import { ReactNode } from "react";

export interface CardProps {
  title: string;
  content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface PostProps {
  title: string;
  content: string;
  userId: number;
  [key: string]: string | number;
}

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}
