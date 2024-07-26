import { create } from "zustand";

const useAuthStore = create((set) => ({
  authUser: JSON.parse(localStorage.getItem("user-info")),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setAuthUser: (user) => set({ user }),
}));

export default useAuthStore;
