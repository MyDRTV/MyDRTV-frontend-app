import { api } from "../../../global/services/api/client";
import { WatchlistItem } from "../types/watchlistType";

export const watchlistService = {
  // Hent brugerens watchlist
  getWatchlist: async (): Promise<WatchlistItem[]> => {
    const response = await api.get<WatchlistItem[]>("/watchlist");
    return response.data;
  },

  // Tilføj film til watchlist
  addToWatchlist: async (movieId: string): Promise<WatchlistItem> => {
    const response = await api.post<WatchlistItem>(`/watchlist/${movieId}`);

    return response.data;
  },

  // Fjern film fra watchlist
  removeFromWatchlist: async (movieId: string): Promise<void> => {
    await api.delete(`/watchlist/${movieId}`);
  },

  // Tjek om film er på watchlist
  isInWatchlist: async (movieId: string): Promise<boolean> => {
    const response = await api.get<{ isInWatchlist: boolean }>(
      `/watchlist/${movieId}`,
    );

    return response.data.isInWatchlist;
  },
};
