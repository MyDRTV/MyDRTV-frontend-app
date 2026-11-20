import { api } from "../../../global/services/api/client";
import {
    LoginCredentials,
    LoginResponse,
    UpdateUser,
    User,
} from "../types/authTypes";

import { tokenStorage } from "../../../global/services/storage/tokenStorage";

export const authService = {
  // Login
  login: async (data: LoginCredentials): Promise<User> => {
    const response = await api.post<LoginResponse>("/auth/login", data);

    await tokenStorage.setToken(response.data.access_token);

    return response.data.user;
  },

  // Update user
  updateUser: async (userId: string, data: UpdateUser): Promise<User> => {
    const response = await api.patch<User>(`/users/${userId}`, data);

    return response.data;
  },

  // Delete user
  deleteUser: async (userId: string): Promise<void> => {
    await api.delete(`/users/${userId}`);

    await tokenStorage.removeToken();
  },

  // Logout
  logout: async (): Promise<void> => {
    await tokenStorage.removeToken();
  },
};
