import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router";
import {
  AuthContainer,
  AuthTitle,
  AuthForm,
  Input,
  Button,
  ErrorMessage,
  SocialButton,
  SwitchContainer,
  SwitchLink,
  ButtonsContainer,
} from "./Sign.styled";
import { FaGithub } from "react-icons/fa";

export default function SignIn() {
  const navigate = useNavigate();
  const { signInWithEmail, signInWithGithub, error: firebaseError } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("이메일 또는 비밀번호를 입력해주세요.");
      return;
    }
    try {
      await signInWithEmail(email, password);
      const user = useAuthStore.getState().user;
      if (user) {
        navigate("/");
      }
    } catch (error: any) {
      setError(error.message || "로그인에 실패하였습니다.");
    }
  };

  const handleGithubClick = async () => {
    try {
      await signInWithGithub();
      const user = useAuthStore.getState().user;
      if (user) {
        navigate("/");
      }
    } catch (err) {
      setError("GitHub 로그인에 실패하였습니다.");
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>로그인</AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <Input id="email" name="email" onChange={handleChange} value={email} type="email" placeholder="이메일 주소" />
        <Input
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          placeholder="비밀번호"
        />
        <Button type="submit">로그인</Button>
        {(error || firebaseError) && <ErrorMessage>{error || firebaseError}</ErrorMessage>}

        <ButtonsContainer>
          <SocialButton type="button" onClick={handleGithubClick}>
            <FaGithub /> GitHub 계정으로 로그인
          </SocialButton>
        </ButtonsContainer>

        <SwitchContainer>
          계정이 없으신가요?<SwitchLink onClick={() => navigate("/signup")}>회원가입</SwitchLink>
        </SwitchContainer>
      </AuthForm>
    </AuthContainer>
  );
}
