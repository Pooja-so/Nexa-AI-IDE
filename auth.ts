import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import authConfig from "./auth.config";
import { getUserById, getAccountByUserId } from "@/features/auth/actions";

export const { auth, handlers, signIn, signOut } = NextAuth({
  callbacks: {
    /**
     * 1. Handle user creation and account linking after a successful sign-in.
     * This ensures that:
     *  - If the user doesn't exist in the database, create them and link their account.
     *  - If the user exists but their account is not linked, link it.
     */
    async signIn({ user, account, profile }) {
      // Step 1: Validate required parameters
      if (!user || !account) {
        return false;
      }

      // Step 2: Check if the user already exists in the database
      const existingUser = await db.user.findUnique({
        where: { email: user.email! },
      });

      // Step 3: If the user does NOT exist, create a new user and link their account
      if (!existingUser) {
        const newUser = await db.user.create({
          data: {
            email: user.email!,
            name: user.name,
            image: user.image,

            // Create and link the account in the same transaction
            accounts: {
              // @ts-expect-error - account fields may differ depending on provider
              create: {
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refreshToken: account.refresh_token,
                accessToken: account.access_token,
                expiresAt: account.expires_at,
                tokenType: account.token_type,
                scope: account.scope,
                idToken: account.id_token,
                sessionState: account.session_state,
              },
            },
          },
        });

        // Step 3a: Fail gracefully if user creation fails
        if (!newUser) {
          return false;
        }
      } else {
        // Step 4: If the user exists, check if the account is already linked
        const existingAccount = await db.account.findUnique({
          where: {
            provider_providerAccountId: {
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            },
          },
        });

        // Step 5: If the account is NOT linked, create the account record
        if (!existingAccount) {
          await db.account.create({
            data: {
              userId: existingUser.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              refreshToken: account.refresh_token,
              accessToken: account.access_token,
              expiresAt: account.expires_at,
              tokenType: account.token_type,
              scope: account.scope,
              idToken: account.id_token,
              // @ts-ignore - may vary by provider
              sessionState: account.session_state,
            },
          });
        }
      }

      // Step 6: Allow sign-in to proceed
      return true;
    },

    /* 2. NextAuth JWT callback (Purpose):
     * - If the token contains a user ID (`sub`), fetch the corresponding user and account from the DB.
     * - Enrich the token with user details (name, email, role) so they are available on the client.
     * - If no matching user is found, return the original token unchanged*/
    async jwt({ token, user, account }) {
      try {
        // Step 1: Skip if the token does not have a user ID
        if (!token.sub) return token;

        // Step 2: Fetch user from DB by ID
        const foundUser = await getUserById(token.sub);
        if (!foundUser) return token;

        // Step 3: Optionally fetch the linked account (if needed elsewhere)
        const linkedAccount = await getAccountByUserId(foundUser.id);

        // Step 4: Enrich token with user data
        return {
          ...token,
          name: foundUser.name,
          email: foundUser.email,
          role: foundUser.role,
        };
      } catch (error) {
        // Step 5: Fail gracefully by returning the original token
        console.error("Error enriching JWT token:", error);
        return token; // original token
      }
    },

    /* 3. NextAuth Session callback (Purpose)
     *  - Transfer specific data from the JWT token into the session object.
     *  - This ensures the session has the user ID and role without extra DB queries. */
    async session({ session, token }) {
      // Step 1: Attach the user ID and role from the token to the session
      if (session.user) {
        if (token.sub) session.user.id = token.sub;
        if (token.role) session.user.role = token.role;
      }
      // Step 2: Return the updated session object
      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
