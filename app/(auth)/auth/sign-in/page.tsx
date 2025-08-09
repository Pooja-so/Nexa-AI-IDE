import Image from "next/image";
import SignInFormClient from "@/features/auth/components/SignInFormCient";
const SignInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col">
      <div className="flex-[1] w-full flex items-center justify-center p-4 bg-black rounded-tr-xl rounded-tl-xl ">
        <Image
        src={"/NexaLogo.jpg"}
        alt="Login-SVG"
        width={300}
        height={300}
        className="rounded-2xl"
      />
      </div>

      <div className="w-full flex-[4] rounded-br-xl rounded-bl-xl ">
        <SignInFormClient />
      </div>
    </div>
  );
};

export default SignInPage;
