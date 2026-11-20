import { api } from "../../../global/services/api/client";
import { Profile } from "../types/profileTypes";

export const profileService = {
  // get profile by id
  getprofileById: async (id: string): Promise<Profile> => {
    const response = await api.get<Profile>(`/users/${id}`);

    return response.data;
  },
};
