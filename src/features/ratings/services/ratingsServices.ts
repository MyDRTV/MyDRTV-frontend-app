import { api } from "../../../global/services/api/client";
import { CreateRating, Ratings, UpdateRating } from "../types/ratingsTypes";

export const ratingService = {
  // Get all ratings for a movie
  getRatingsByMovieId: async (movieId: string): Promise<Ratings[]> => {
    const response = await api.get<Ratings[]>(`/${movieId}/ratings`);

    return response.data;
  },

  // Create a rating
  createRating: async (
    movieId: string,
    data: CreateRating,
  ): Promise<Ratings> => {
    const response = await api.post<Ratings>(`/${movieId}/ratings`, data);

    return response.data;
  },

  // Update a rating
  updateRating: async (
    movieId: string,
    ratingId: string,
    data: UpdateRating,
  ): Promise<Ratings> => {
    const response = await api.patch<Ratings>(
      `/${movieId}/ratings/${ratingId}`,
      data,
    );

    return response.data;
  },

  // Delete a rating
  deleteRating: async (movieId: string, ratingId: string): Promise<void> => {
    await api.delete(`/${movieId}/ratings/${ratingId}`);
  },
};
