import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { LogoutButtonProps } from "../types";

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut();
    router.refresh();
  };
  return (
    <span className="cursor-pointer" onClick={handleLogout}>
      {children}
    </span>
  );
};

export default LogoutButton;
