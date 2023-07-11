import { Collapse } from "@components";
import { InformationGuide } from "@dts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Union from "@assets/union.png";

export interface InformationGuideItemProps {
    data?: InformationGuide;
}

const TitleContainer = styled.div`
    ${tw`flex gap-1 h-[80px]`}
`;

const ImgContainer = styled.div`
    ${tw`flex items-center justify-start w-[30px] flex-none`}
`;

const Answer = styled.div`
    ${tw`bg-[#EBF4FF] px-4 py-2 mx-4 mb-4 rounded-lg leading-6 whitespace-pre-wrap`}
`;

const Title = styled.div`
    ${tw`text-[15px] font-normal flex items-center`}
`;

const InformationGuideItem: React.FC<InformationGuideItemProps> = ({
    data,
}) => (
    <Collapse
        title={
            <TitleContainer>
                <ImgContainer>
                    <img src={Union} alt="" />
                </ImgContainer>
                <Title>{data?.question}</Title>
            </TitleContainer>
        }
    >
        <Answer>{data?.answer}</Answer>
    </Collapse>
);

export default InformationGuideItem;
