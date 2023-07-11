import { useEffect } from "react";
import { useStore } from "@store";
import { useSnackbar } from "zmp-ui";

const ErrorNotification = () => {
    const [error, setError] = useStore(state => [state.error, state.setError]);
    const { openSnackbar } = useSnackbar();

    useEffect(() => {
        if (error) {
            openSnackbar({
                type: "error",
                text: error.message,
                onClose: () => {
                    setError(undefined);
                },
                verticalAction: true,
                action: { text: "Đóng", close: true },
            });
        }
    }, [error]);

    return null;
};

export default ErrorNotification;
