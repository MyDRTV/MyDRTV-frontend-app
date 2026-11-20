export type Ratings = {
  rating_pk: string;
  user_fk: string;
  movie_fk: string;
  rating: number;
};

export type CreateRating = {
  rating: number;
};

export type UpdateRating = {
  rating: number;
};
