import { api } from "../../../global/services/api/client";
import { Movie } from "../types/movieTypes";

export const movieService = {
  // get all movies
  getMovies: async () => {
    const response = await api.get<Movie[]>("/movies");

    return response.data;
  },

  // get movie by id
  getMovieById: async (id: string): Promise<Movie> => {
    const response = await api.get<Movie>(`/movies/${id}`);

    return response.data;
  },
};
