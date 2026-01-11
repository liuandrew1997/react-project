
import { useFetch } from "./fetch";

const baseUrl = "https://api-v2.xdclass.net/api";

interface requestProps {
  data: any;
  msg: string;
  code: number;
}

export function useApi(url: string, options?: RequestInit) {
  return useFetch<requestProps>(`${baseUrl}${url}`, options);
}
