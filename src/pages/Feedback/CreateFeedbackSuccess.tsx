import { Divider } from "@components";
import AppButton from "@components/customized/Button";
import { SuccessIcon } from "@components/icons";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, useNavigate } from "zmp-ui";

const SuccessContainer = styled(Box)`
    ${tw`bg-white p-4  `}
`;

const Description = styled.div`
    ${tw`mt-4 `}
`;

const CreateFeedbackSuccess: React.FC = () => {
    const navigate = useNavigate();

    return (
        <SuccessContainer>
            <Box py={10} flex flexDirection="column" alignItems="center">
                <SuccessIcon />
                <Description>Gửi phản ánh thành công</Description>
            </Box>
            <Box my={4}>
                <Divider />
            </Box>
            <Box flex justifyContent="center">
                <AppButton
                    size="medium"
                    onClick={() => navigate("/feedbacks", { replace: false })}
                >
                    Trở về
                </AppButton>
            </Box>
        </SuccessContainer>
    );
};

export default CreateFeedbackSuccess;
