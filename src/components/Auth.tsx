import { useEffect } from "react";
import { useStore } from "@store";

const Auth = () => {
    const [token, getToken] = useStore(state => [
        state.token,
        state.getAccessToken,
    ]);

    useEffect(() => {
        if (!token) {
            getToken();
        }
    }, []);

    return null;
};

export default Auth;
