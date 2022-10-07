import useAuthStore from "~/stores/auth";

function useAuthUser() {
  const { user } = useAuthStore();

  return user!;
}

export default useAuthUser;
