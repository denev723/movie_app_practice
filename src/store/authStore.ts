import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, User } from "firebase/auth";
import { create } from "zustand";
import { UserProfile } from "../types/user";
import { auth, githubProvider } from "../firebase/firebaseConfig";

interface AuthState {
  user: UserProfile | null;
  error: string | null;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signInWithGithub: () => Promise<void>;
  logout: () => void;
}

function mapUser(user: User): UserProfile {
  const fallbackName = user.email ? user.email.split("@")[0] : "Anonymous";

  return {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName ?? fallbackName,
    photoURL: user.photoURL,
    providerId: user.providerId,
  };
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  error: null,
  signInWithEmail: async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      set({ user: mapUser(result.user), error: null });
    } catch (error: any) {
      let message = "로그인에 실패했습니다.";
      if (error.code === "auth/user-not-found") {
        message = "존재하지 않는 계정입니다.";
      } else if (error.code === "auth/wrong-password") {
        message = "비밀번호가 일치하지 않습니다.";
      } else if (error.code === "auth/invalid-credential") {
        message = "이메일 또는 비밀번호를 확인해주세요.";
      }
      set({ error: message });
    }
  },
  signUpWithEmail: async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      set({ user: mapUser(result.user), error: null });
    } catch (error: any) {
      console.error("Firebase 로그인 에러:", error.code, error.message);
      set({ error: error.message });
    }
  },
  signInWithGithub: async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      set({ user: mapUser(result.user), error: null });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
  logout: async () => {
    try {
      await auth.signOut();
      set({ user: null, error: null });
    } catch (error: any) {
      set({ error: error.message });
    }
  },
}));
