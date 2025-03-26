import { create } from "zustand";

type ThemeMode = "light" | "dark";

interface ThemeState {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: "dark",
  toggleTheme: () => set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
}));
