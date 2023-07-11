import { Divider } from "@components/common";
import AppButton from "@components/customized/Button";
import { SuccessIcon } from "@components/icons";
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
const PendingCard: FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/", { direction: "backward" });
    };
    return (
        <CardContainer>
            <Box py={4}>
                <Box flex justifyContent="center">
                    <SuccessIcon />
                </Box>
                <Box mt={3}>
                    <CardTitle size="small">
                        Đặt lịch làm việc thành công
                    </CardTitle>
                </Box>
                <Box mt={3}>
                    <Content>
                        Cán bộ nhân viên sẽ xử lý xác nhận lịch làm việc của bạn
                        trong thời gian sớm nhất.
                    </Content>
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

export default PendingCard;
