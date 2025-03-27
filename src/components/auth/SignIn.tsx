import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router";

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
    <div>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input id="email" name="email" onChange={handleChange} value={email} type="email" placeholder="이메일 주소" />
        <input
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
          type="password"
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
      </form>
      {(error || firebaseError) && <p>{error || firebaseError}</p>}
      <div>
        <button onClick={handleGithubClick}>GitHub 계정으로 로그인</button>
      </div>
    </div>
  );
}
