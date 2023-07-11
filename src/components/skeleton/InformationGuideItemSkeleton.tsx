import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box } from "zmp-ui";
import TextItemSkeleton from "./TextSketeton";

const Wrapper = styled.div`
    ${tw``}
    &:not(:first-child) {
        margin-top: 16px;
    }
`;

const ContentWrapper = styled(Box)`
    ${tw`flex-1 overflow-hidden`}
`;

const Hr = styled.div`
    ${tw`border-b-[1.5px] border-[#F4F5F6] my-2`}
`;

const InformationGuideItemSkeleton: React.FunctionComponent = () => (
    <Wrapper>
        <Box p={2}>
            <Box p={2}>
                <TextItemSkeleton height={20} />
            </Box>
            <ContentWrapper>
                <Box p={2}>
                    <TextItemSkeleton height={20} />
                </Box>
            </ContentWrapper>
        </Box>

        <Hr />
    </Wrapper>
);

export default InformationGuideItemSkeleton;
