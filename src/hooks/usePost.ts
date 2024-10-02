import { useCallback } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { toast } from "sonner";
import { apiUrl } from "@/constraints/api";

// Define um tipo genérico para a função postData
type UsePost<ResponseType, BodyType> = (
  body: BodyType,
  config?: AxiosRequestConfig
) => Promise<ResponseType>;

export const usePost = <ResponseType, BodyType = any>(
  route: string
): UsePost<ResponseType, BodyType> => {
  const postData = useCallback(
    async (
      body: BodyType,
      config?: AxiosRequestConfig
    ): Promise<ResponseType> => {
      const endpoint = `${apiUrl}${route}`;

      try {
        const response = await axios.post(endpoint, body, config);

        return response.data;
      } catch (error: unknown) {
        console.log(error);

        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data?.message || error.message);
          throw error; // Repassa o erro para que o componente possa tratá-lo
        } else {
          toast.error("Ocorreu um erro inesperado");
          throw new Error("Ocorreu um erro inesperado");
        }
      }
    },
    [route]
  );

  return postData;
};
