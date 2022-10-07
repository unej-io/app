import create from "zustand";
import { devtools } from "zustand/middleware";

type UserRole = "student" | "organization";

type User = {
  role: UserRole;
};

type UserStoreState = {
  data: User | null;
};

type UserStoreAction = {
  setUser: (data: User | null) => void;
};

type UserStoreType = UserStoreState & UserStoreAction;

const useUserStore = create<UserStoreType>()(
  devtools((set) => ({
    data: null,
    setUser: (data) => {
      set({ data });
    },
  }))
);

export type { UserStoreState, UserStoreAction, UserStoreType };
export default useUserStore;
