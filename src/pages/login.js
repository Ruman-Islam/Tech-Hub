import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-[450px] w-full flex flex-col items-center">
        <div
          onClick={() =>
            signIn("google", {
              callbackUrl: callbackUrl || "http://localhost:3000/",
            })
          }
          className="max-w-[250px] w-full flex items-center justify-center p-2 rounded bg-white border mb-2 gap-x-2 cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          SignIn with Github
        </div>
        <div
          onClick={() =>
            signIn("github", {
              callbackUrl: callbackUrl || "http://localhost:3000/",
            })
          }
          className="max-w-[250px] w-full flex items-center justify-center p-2 rounded bg-white border mb-2 gap-x-2 cursor-pointer"
        >
          <BsGithub className="text-xl" />
          SignIn with Github
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
