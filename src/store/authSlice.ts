import { User } from "@dts";
import { getToken, getZaloUserInfo } from "@service/zalo";
import { StateCreator } from "zustand";

export interface AuthSlice {
    token?: string;
    user?: User;
    loadingToken: boolean;
    loadingUserInfo: boolean;
    setToken: (token: string) => void;
    getToken: () => string | undefined;
    getUser: () => User | undefined;
    setUser: (user: User) => void;
    setLoading: (loading: boolean) => void;
    getUserInfo: () => Promise<void>;
    getAccessToken: () => Promise<void>;
}

const authSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (set, get) => ({
    token: "",
    user: undefined,
    loadingToken: false,
    loadingUserInfo: false,
    setToken: (token: string) => {
        set(state => ({ ...state, token }));
    },
    getToken: () => get().token,
    getUser: () => get().user,
    setUser: (user: User) => {
        set(state => ({ ...state, user }));
    },
    setLoading: (loading: boolean) => {
        set(state => ({ ...state, loading }));
    },
    getUserInfo: async () => {
        try {
            set(state => ({ ...state, loadingUserInfo: true }));
            const user = await getZaloUserInfo();

            set(state => ({ ...state, user }));
        } catch (err) {
            console.log("ERR: ", err);
        } finally {
            set(state => ({ ...state, loadingUserInfo: false }));
        }
    },
    getAccessToken: async () => {
        try {
            set(state => ({ ...state, loadingToken: true }));
            const token = await getToken();
            set(state => ({ ...state, token }));
        } catch (err) {
            console.log("ERR: ", err);
        } finally {
            set(state => ({ ...state, loadingToken: false }));
        }
    },
});

export default authSlice;
