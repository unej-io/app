import { useEffect, useMemo, useState } from "react";
import type { PropsWithChildren, ReactNode } from "react";

import { delay } from "javascript-yesterday";

import useAuthStore from "~/stores/auth";
import { createUserStore, UserStoreProvider } from "~/stores/user";
import type { User } from "~/stores/user";

async function fakeGetUserByUID(uid: string): Promise<User> {
  await delay(500);
  console.log(`fakeGetUserByUID:${uid}`);

  return {
    role: "student",
  };
}

type UserProviderChildProps = PropsWithChildren<{
  user: User;
}>;

function UserProviderChild(props: UserProviderChildProps) {
  const createStore = useMemo(() => createUserStore(props.user), [props.user]);

  return <UserStoreProvider createStore={createStore}>{props.children}</UserStoreProvider>;
}

type UserProviderProps = PropsWithChildren<{
  fallback?: ReactNode;
}>;

function UserProvider(props: UserProviderProps) {
  const auth = useAuthStore();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetch() {
      if (!auth.user) {
        setUser({});
        return;
      }

      const user = await fakeGetUserByUID(auth.user.uid);

      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    }

    fetch();
  }, [auth.user]);

  if (user) {
    return <UserProviderChild user={user}>{props.children}</UserProviderChild>;
  }

  return <>{props.fallback}</>;
}

export type { UserProviderProps };
export default UserProvider;
