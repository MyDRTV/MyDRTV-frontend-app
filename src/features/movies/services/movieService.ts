import { api } from "@/services/api/client";
import { getMovies } from "../types/movieTypes";

export const movieService = {
  createRating: async (data: getMovies) => {
    const response = await api.get(`/movies`, data);

    return response.data;
  },
};
