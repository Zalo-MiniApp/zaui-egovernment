import { Button } from "@components";
import FeedbackSection from "@components/feedback/FeedbackSection";
import PageLayout from "@components/layout/PageLayout";
import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon, useNavigate } from "zmp-ui";
import Background from "@assets/background.png";

const InfoContainer = styled(Box)`
    ${tw`bg-white flex items-center flex-col gap-4 `}
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
`;

const Title = styled.div`
    ${tw`text-[15px] text-[#767A7F]`}
`;

const FeedbackPage: React.FC = () => {
    const pageRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

    const onSendFeedback = () => {
        navigate("/create-feedback");
    };

    return (
        <PageLayout title="Góp ý - phản ánh" id="feedbacks" ref={pageRef}>
            <InfoContainer p={8} m={0}>
                <Title>Bạn có sự việc cần phản ánh?</Title>

                <Button
                    onClick={onSendFeedback}
                    suffixIcon={<Icon icon="zi-chevron-right" />}
                >
                    Gửi phản ánh
                </Button>
            </InfoContainer>

            <FeedbackSection />
        </PageLayout>
    );
};

export default FeedbackPage;
