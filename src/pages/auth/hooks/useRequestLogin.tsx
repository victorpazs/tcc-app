import { usePost } from "@/hooks/usePost";

export type LoginBody = {
  email: string;
};

export type LoginResponse = {
  message: string;
};
export const useRequestLogin = () => {
  return usePost<LoginResponse, LoginBody>("/request-login");
};
