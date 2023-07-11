import ImageSwiper from "@components/feedback/ImageSwiper";
import PageLayout from "@components/layout/PageLayout";
import { useStore } from "@store";
import { formatDateTime } from "@utils/date-time";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon, useNavigate } from "zmp-ui";

const Container = styled(Box)`
    ${tw`bg-white`}
`;

const HeaderContainer = styled.div`
    ${tw`grid grid-cols-2 gap-2 mb-2  leading-5`}
`;

const TimeContainer = styled.div`
    ${tw`flex items-center gap-1  justify-end text-[#767A7F] text-[12px] `}
`;

const FeedbackType = styled.div`
    ${tw` border-[#D7EDFF] text-[12px] border w-fit px-2 py-0.5 text-[#046DD6] rounded-xl font-medium h-fit`}
`;

const Date = styled.div`
    ${tw``}
`;

const BodyContainer = styled.div`
    ${tw`text-[#141414]`}
`;

const Title = styled.div`
    ${tw`font-medium `}
`;

const Content = styled.div`
    ${tw`text-[#767A7F] whitespace-pre-wrap`}
`;

const Response = styled.div`
    ${tw`whitespace-pre-line`}
`;

const Hr = styled.div`
    ${tw`border-b-[1.5px] my-4 border-[#F4F5F6]`}
`;

const FeedbackDetailPage: React.FC = () => {
    const [feedback, getFeedback] = useStore(state => [
        state.feedbackDetail,
        state.getFeedback,
    ]);
    const { id } = useParams();

    const navigate = useNavigate();
    useEffect(() => {
        if (!id) {
            navigate("/", { animate: false, replace: true });
        } else {
            getFeedback({ id: Number(id) });
        }
    }, [id]);

    return (
        <PageLayout title="Chi tiết phản ánh">
            {feedback?.imageUrls && (
                <ImageSwiper imageUrls={feedback.imageUrls} />
            )}

            <Container p={4} mb={2}>
                <HeaderContainer>
                    <FeedbackType
                        style={{ backgroundColor: "rgba(18, 174, 226, 0.1)" }}
                    >
                        {feedback?.type}
                    </FeedbackType>
                    <TimeContainer>
                        <Date>{formatDateTime(feedback?.creationTime)}</Date>
                        <Icon size={13} icon="zi-clock-1" />
                    </TimeContainer>
                </HeaderContainer>
                <Title>{feedback?.title}</Title>

                <Hr />

                <Content>{feedback?.content}</Content>
            </Container>

            <Container p={4}>
                <HeaderContainer>
                    <Title>Trả lời phản ánh</Title>
                    <TimeContainer>
                        <Date>{formatDateTime(feedback?.responseTime)}</Date>
                        <Icon size={13} icon="zi-clock-1" />
                    </TimeContainer>
                </HeaderContainer>
                <Hr />
                <BodyContainer>
                    <Response>{feedback?.response}</Response>
                </BodyContainer>
            </Container>
        </PageLayout>
    );
};

export default FeedbackDetailPage;
