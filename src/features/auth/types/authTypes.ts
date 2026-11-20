export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  user: User;
};

export type User = {
  user_pk: string;
  user_name: string;
  user_email: string;
};

export type UpdateUser = {
  user_name?: string;
  user_email?: string;
  password?: string;
};
