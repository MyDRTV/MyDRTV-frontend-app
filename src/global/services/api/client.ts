// axios er en HTTP-klient, der bruges til at foretage API-anmodninger.
// I dette tilfælde bruges axios til at oprette en instans af API-klienten,
// som kan bruges til at kommunikere med backend-serveren.
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

import { tokenStorage } from "../storage/tokenStorage";

// Opret Axios-instansen med standardindstillinger
export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor for at tilføje Authorization header til alle anmodninger, hvis token er tilgængeligt
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token: string | null = await tokenStorage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
