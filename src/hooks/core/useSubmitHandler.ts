import { useState } from "react";

function useSubmitHandler<V, T = void>(handler: (v: V) => Promise<T>) {
  const [submitting, setSubmitting] = useState(false);

  const submitHandler = async (values: V) => {
    setSubmitting(true);
    const result = await handler(values);
    setSubmitting(false);
    return result;
  };

  return [submitHandler, { submitting, setSubmitting }] as const;
}

export default useSubmitHandler;
