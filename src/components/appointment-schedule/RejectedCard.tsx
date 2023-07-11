import { Divider } from "@components/common";
import AppButton from "@components/customized/Button";
import NotificationIcon from "@components/icons/Notification";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Text, useNavigate } from "zmp-ui";

const CardContainer = styled("div")`
    ${tw`px-4 py-8 pt-6 rounded-lg bg-white`}
`;

const CardTitle = styled(Text.Title)`
    ${tw`text-center`}
`;

const Content = styled(Text)`
    ${tw`text-center`}
`;

export interface RejectedCardProps {
    reason?: string;
}
const RejectedCard: FC<RejectedCardProps> = ({ reason }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/", { direction: "backward" });
    };
    return (
        <CardContainer>
            <Box py={4}>
                <Box flex justifyContent="center">
                    <NotificationIcon />
                </Box>
                <Box mt={3}>
                    <CardTitle size="small">
                        Đặt lịch không thành công
                    </CardTitle>
                </Box>
                <Box mt={3}>
                    <Content>Lý do từ chối: {reason}</Content>
                </Box>
                <Box mt={4}>
                    <Divider />
                </Box>
                <Box p={4} flex justifyContent="center">
                    <AppButton onClick={handleOnClick} size="medium">
                        Về trang chủ
                    </AppButton>
                </Box>
            </Box>
        </CardContainer>
    );
};

export default RejectedCard;
