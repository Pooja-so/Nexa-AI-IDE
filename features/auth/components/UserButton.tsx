"use client";

import React from "react";
import LogoutButton from "./LogoutButton";
import { useCurrentUser } from "../hooks/useCurrentUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      {/* Trigger(Head): Showing User Avatar */}
      <DropdownMenuTrigger>
        <div className={cn("relative rounded-full cursor-pointer")}>
          <Avatar>
            <AvatarImage
              src={user?.image ?? undefined}
              alt={user?.name ?? "User avatar"}
            />
            <AvatarFallback className="bg-gray-200">
              <User className="text-white" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      {/* Content(Body): user email and Logout Button */}
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <span>{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="h-4 w-4 mr-2" />
            LogOut
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
