import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "access_token";

export const tokenStorage = {
  getToken: async (): Promise<string | null> => {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  },

  setToken: async (token: string): Promise<void> => {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  },

  removeToken: async (): Promise<void> => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  },
};
