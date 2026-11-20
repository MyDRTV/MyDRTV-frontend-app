export type WatchlistItem = {
  user_fk: string;
  movie_fk: string;
  watchlist_added_at: string;
};

export type CreateWatchlist = {
  movie_fk: string;
};
