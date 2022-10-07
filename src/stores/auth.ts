import create from "zustand";
import { devtools } from "zustand/middleware";

import type { User } from "firebase/auth";

type AuthUser = User;

type AuthStoreState = {
  user: AuthUser | null;
  loading: boolean;
};

type AuthStoreAction = {
  setUser: (user: AuthUser | null) => void;
  setLoading: (loading: boolean) => void;
};

type AuthStoreType = AuthStoreState & AuthStoreAction;

const useAuthStore = create<AuthStoreType>()(
  devtools((set) => ({
    user: null,
    loading: true,
    setUser: (user) => {
      set({ user });
    },
    setLoading: (loading) => {
      set({ loading });
    },
  }))
);

export type { AuthStoreState, AuthStoreAction, AuthStoreType };
export default useAuthStore;
