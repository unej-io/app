import create from "zustand";

import type { User } from "firebase/auth";

import { withDevtools } from "./@utilities";

const NAME = "app-unej-io:auth-store";

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
  withDevtools(
    (set) => ({
      user: null,
      loading: true,
      setUser: (user) => {
        set({ user });
      },
      setLoading: (loading) => {
        set({ loading });
      },
    }),
    { name: NAME }
  )
);

export type { AuthStoreState, AuthStoreAction, AuthStoreType };
export default useAuthStore;
