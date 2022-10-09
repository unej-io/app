import create from "zustand";
import createContext from "zustand/context";
import type { StoreApi } from "zustand";

import { withDevtools } from "./@utilities";

const NAME = "app-unej-io:user-store";

type UserRole = "student" | "organization";

type User = {
  role?: UserRole;
};

type UserStoreType = User;

const createUserStore = (user: User) => () =>
  create<UserStoreType>()(
    withDevtools(() => user as UserStoreType, {
      name: NAME,
    })
  );

const { Provider: UserStoreProvider, useStore: useUserStore } = createContext<StoreApi<UserStoreType>>();

export type { User, UserStoreType };
export { createUserStore };
export { UserStoreProvider };
export default useUserStore;
