import { Feedback } from "@dts";
import { formatDateTime } from "@utils/date-time";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Icon, useNavigate } from "zmp-ui";

const Container = styled.div`
    ${tw`py-3 px-1 `}
`;

const HeaderContainer = styled.div`
    ${tw`grid grid-cols-2 gap-2 mb-2 text-[12px] leading-5`}
`;

const TimeContainer = styled.div`
    ${tw`flex items-center gap-1  justify-end text-[#767A7F] `}
`;

const FeedbackType = styled.div`
    ${tw` border-[#D7EDFF] border w-fit px-2 py-0.5 text-[#046DD6] rounded-xl font-medium h-fit`}
`;

const Date = styled.div`
    ${tw``}
`;

const BodyContainer = styled.div`
    ${tw`text-[#141414]`}
`;

const Content = styled.div`
    ${tw`[line-clamp: 3]`}
`;

const ImageContainer = styled.div`
    ${tw`flex mb-2`}
`;

const Image = styled.img`
    ${tw`h-[15rem] w-full object-cover  rounded-t-md`}
`;

export interface FeedbackItemProps {
    data: Feedback;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ data }) => {
    const navigate = useNavigate();

    const onClickFeedback = () => {
        navigate(`/feedbacks/${data.id}`);
    };

    return (
        <Container onClick={onClickFeedback}>
            {data.imageUrls && data.imageUrls.length > 0 && (
                <ImageContainer>
                    <Image src={data.imageUrls[0]} />
                </ImageContainer>
            )}

            <HeaderContainer>
                <FeedbackType
                    style={{ backgroundColor: "rgba(18, 174, 226, 0.1)" }}
                >
                    {data.type}
                </FeedbackType>
                <TimeContainer>
                    <Date>{formatDateTime(data.creationTime)}</Date>
                    <Icon size={13} icon="zi-clock-1" />
                </TimeContainer>
            </HeaderContainer>

            <BodyContainer>
                <Content>{data.content}</Content>
            </BodyContainer>
        </Container>
    );
};

export default FeedbackItem;
