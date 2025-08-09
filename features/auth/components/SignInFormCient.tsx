import React from "react";
import { signIn } from "@/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Github } from "lucide-react";

/* SignIn Options: Using Google and Github */
async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}
async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md rounded-t-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center text-xl text-gray-600">
          Sign in to Code smarter with Nexa
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        <form action={handleGoogleSignIn}>
          <Button
            type="submit"
            variant={"outline"}
            className="w-full h-full rounded-4xl cursor-pointer transform transition duration-300 ease-in-out bg-blue-600 text-white hover:bg-blue-800 hover:text-white hover:translate-x-1 hover:translate-y-1 "
          >
            <Image
              src={"/GoogleIcon.png"}
              alt="Google icon"
              height={25}
              width={25}
            />
            <span className="text-lg">Sign in with google</span>
          </Button>
        </form>
        <form action={handleGithubSignIn}>
          <Button
            type="submit"
            variant={"outline"}
            className="w-full h-full rounded-4xl cursor-pointer bg-black text-white hover:font-bold hover:border-amber-950 transform transition duration-300 ease-in-out hover:translate-x-1 hover:translate-y-2"
          >
            <Image
              src={"/GithubIcon.png"}
              alt="Github icon"
              height={25}
              width={30}
            />
            <span className="text-lg">Sign in with github</span>
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
        {/* Choose Google or GitHub to sign in */}
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
