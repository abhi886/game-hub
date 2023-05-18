import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    initialData: { count: platforms.length, results: platforms },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default usePlatforms;
