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

export default function SignUp() {
  const navigate = useNavigate();
  const { signUpWithEmail, signInWithGithub, error: firebaseError } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vPassword, setVPassword] = useState("");
  const [error, setError] = useState("");

  const handleCange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
    else if (name === "vPassword") setVPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    if (!email || !password || !vPassword) {
      setError("이메일 또는 비밀번호를 입력해주세요.");
      return;
    }
    if (password.length < 10) {
      setError("비밀번호는 10자 이상이어야 합니다.");
      return;
    }
    if (password !== vPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await signUpWithEmail(email, password);
      navigate("/");
    } catch (error) {
      setError("회원가입에 실패하였습니다.");
    }
  };

  const handleGithubClick = async () => {
    try {
      await signInWithGithub();
      const user = useAuthStore.getState().user;
      if (user) {
        navigate("/");
      }
    } catch (error: any) {
      const message = error.message || "회원가입에 실패하였습니다.";
      setError(message);
    }
  };

  return (
    <AuthContainer>
      <AuthTitle>회원가입</AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <Input name="email" id="email" onChange={handleCange} value={email} type="email" placeholder="이메일" />
        <Input
          name="password"
          id="password"
          onChange={handleCange}
          value={password}
          type="password"
          placeholder="비밀번호"
        />
        <Input
          name="vPassword"
          id="password2"
          onChange={handleCange}
          value={vPassword}
          type="password"
          placeholder="비밀번호 확인"
        />
        <Button type="submit">회원가입</Button>
        {(error || firebaseError) && <ErrorMessage>{error || firebaseError}</ErrorMessage>}

        <ButtonsContainer>
          <SocialButton type="button" onClick={handleGithubClick}>
            <FaGithub /> GitHub 계정으로 회원가입
          </SocialButton>
        </ButtonsContainer>

        <SwitchContainer>
          이미 계정이 있으신가요?<SwitchLink onClick={() => navigate("/signin")}>로그인</SwitchLink>
        </SwitchContainer>
      </AuthForm>
    </AuthContainer>
  );
}
