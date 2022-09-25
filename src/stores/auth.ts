import create from "zustand";
import { devtools } from "zustand/middleware";

type AuthUser = {
  username: string;
};

type AuthStoreState = {
  user: AuthUser | null;
};

type AuthStoreAction = {
  setUser: (user: AuthUser) => void;
  signIn: (data: { username: string; password: string }) => Promise<void>;
  signUp: (data: { username: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthStoreType = AuthStoreState & AuthStoreAction;

const useAuthStore = create<AuthStoreType>()(
  devtools((set, get) => ({
    user: null,
    setUser: (user) => {
      set({ user });
    },
    signIn: async (data) => {
      const { username, password } = data;

      console.log("Sign In with", { username, password });

      set({ user: { username } });
    },
    signUp: async (data) => {
      const { username, password } = data;

      console.log("Sign Up with", { username, password });

      set({ user: { username } });
    },
    signOut: async () => {
      console.log("Sign Out");

      set({ user: null });
    },
  }))
);

export type { AuthStoreState, AuthStoreAction, AuthStoreType };
export default useAuthStore;
