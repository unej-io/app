import { devtools } from "zustand/middleware";

const withDevtools = (import.meta.env.PROD ? (fn: any) => fn : devtools) as unknown as typeof devtools;

export { withDevtools };
