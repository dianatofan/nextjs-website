import { create } from 'zustand';

type UIState = {
  mode: boolean;
  setMode: (mode: boolean) => void;
  toggleMode: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  mode: false,
  setMode: (mode) => set({ mode }),
  toggleMode: () => set((s) => ({ mode: !s.mode })),
}));
