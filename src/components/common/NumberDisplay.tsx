import { padWithLeadingZeros } from "@utils/string";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
    ${tw`w-[6.25rem] h-[6.25rem]  bg-[#3B8AC91A] rounded-full flex items-center justify-center`}
`;

const Content = styled.span`
    ${tw`text-[#2C8AD4] text-3xl font-bold`}
`;

export interface NumberDisplayProps {
    number: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
    const displayNumber = padWithLeadingZeros(number, 3);
    return (
        <Wrapper>
            <Content>{displayNumber}</Content>
        </Wrapper>
    );
};

export default NumberDisplay;
