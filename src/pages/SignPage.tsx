import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { HelmetMeta } from "../lib/helmet";

interface Props {
  signType: "signin" | "signup";
}

export default function SignPage({ signType }: Props) {
  return (
    <>
      <HelmetMeta title={signType === "signin" ? "Sign In" : "Sign Up"} description="로그인 및 회원가입" />
      {signType === "signin" ? <SignIn /> : <SignUp />}
    </>
  );
}
