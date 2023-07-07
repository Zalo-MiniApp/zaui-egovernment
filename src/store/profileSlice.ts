import { RATE_LIMIT_CODE } from "@constants";
import { AppError, Profile } from "@dts";
import { searchProfiles, SearchProfileParams } from "@service/services.mock";
import { StateCreator, create } from "zustand";
import { OrganizationSlice } from "./organizationSlice";
import appSlice, { AppSlice } from "./appSlice";

export interface ProfileSlice {
    searchingProfiles?: boolean;
    gettingProfile?: boolean;
    profile?: Profile;
    profiles?: Profile[];
    searchProfiles: (
        params: Omit<SearchProfileParams, "organizationId">
    ) => Promise<void>;
    getProfile: (params: { id: string }) => void;
}

const profileSlice: StateCreator<
    ProfileSlice & AppSlice & OrganizationSlice,
    [],
    [],
    ProfileSlice
> = (set, get) => ({
    gettingProfile: false,
    searchingProfiles: false,
    searchProfiles: async (
        params: Omit<SearchProfileParams, "organizationId">
    ) => {
        try {
            const organizationId = get().organization?.id;

            set(state => ({
                ...state,
                searchingProfiles: true,
            }));
            const profiles = await searchProfiles({
                ...params,
                organizationId: organizationId || "",
            });

            set(state => ({
                ...state,
                profiles: profiles,
            }));
        } catch (err) {
            if (err) {
                const { message, code } = err as AppError;
                if (code === RATE_LIMIT_CODE.code) {
                    set(state => ({
                        ...state,
                        error: RATE_LIMIT_CODE,
                    }));
                }
            }
            set(state => ({
                ...state,
                profiles: [],
            }));
        } finally {
            set(state => ({
                ...state,
                searchingProfiles: false,
            }));
        }
    },
    getProfile: (params: { id: string }) => {
        const { id } = params;

        const profile = get().profiles?.find(item => {
            return item.profileCode === id.toString();
        });
        set(state => ({ ...state, profile: profile }));
    },
});

export default profileSlice;
