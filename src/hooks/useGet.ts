import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { apiUrl } from "@/constraints/api";

type UseGetResponse<T> = {
  data: T | null;
  loading: boolean;
  fetchData: (query?: Record<string, unknown>) => void;
};

export const useGet = <T>(route: string): UseGetResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(
    async (query?: Record<string, unknown>) => {
      setLoading(true);
      const endpoint = `${apiUrl}${route}`;

      try {
        // Convert query object to query string
        const queryString = query
          ? Object.keys(query)
              .filter((key) => query[key])
              .map((key) => encodeURIComponent(`${key}=${query[key]}`))
              .join("&")
          : "";

        const url = queryString ? `${endpoint}?${queryString}` : endpoint;

        const response = await axios.get(url);
        const { data } = response;
        setData(data);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          toast.error(error?.message);
        } else {
          toast.error("An error occurred");
        }
      } finally {
        setLoading(false);
      }
    },
    [route]
  );

  return { data, loading, fetchData };
};
