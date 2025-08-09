import { UserRole } from "@prisma/client";
import { DefaultSession } from "next-auth";

// Extend the default session's `user` to include `role` from Prisma
export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole; // strictly type role as a UserRole enum from Prisma instead of a plain string.
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }

  interface User {
    role: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
  }
}

/* 
 1. Kept role strictly typed as UserRole 
 -> This ensures you can only assign values like "ADMIN" or "USER" (from your Prisma schema). 
 2. Added User interface extension
 -> This ensures that the user object from the database (in the signIn callback) also has a role.
 -> Without this, TypeScript may still complain when accessing user.role in the jwt callback.
*/
