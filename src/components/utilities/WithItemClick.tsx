import React, { ComponentType } from "react";
import { openPhone } from "zmp-sdk";
import { openWebView } from "@service/zalo";
import { useSnackbar, useNavigate } from "zmp-ui";

function WithItemClick<T>(Component: ComponentType<T & object>) {
    return (props: T) => {
        const navigate = useNavigate();
        const { openSnackbar } = useSnackbar();

        const handleClickUtinity = ({
            inDevelopment,
            path,
            phoneNumber,
            link,
        }: {
            inDevelopment?: boolean;
            path?: string;
            phoneNumber?: string;
            link?: string;
        }) => {
            if (inDevelopment) {
                openSnackbar({
                    text: "Tính năng đang được phát triển",
                    type: "info",
                    duration: 3000,
                    verticalAction: true,
                    action: { text: "Đóng", close: true },
                });
            } else if (path) {
                navigate(path, { animate: true, direction: "forward" });
            } else if (phoneNumber) {
                openPhone({
                    phoneNumber,
                    success: () => {
                        console.log("");
                    },
                    fail: error => {
                        console.log(error);
                    },
                });
            } else if (link) {
                try {
                    openWebView(link);
                } catch (err) {
                    console.log("ERR: ", err);
                }
            }
        };
        return <Component {...props} handleClickUtinity={handleClickUtinity} />;
    };
}

export default WithItemClick;
