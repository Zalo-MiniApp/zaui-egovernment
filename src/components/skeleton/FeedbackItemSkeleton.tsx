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

const HeaderWrapper = styled(Box)`
    ${tw`grid grid-cols-2 gap-4 overflow-hidden`}
`;

const ThumbSkeleton = styled.div`
    ${tw`bg-devider_1 animate-pulse rounded w-full h-[150px]`}
`;

const FeedbackItemSkeleton: React.FunctionComponent = () => (
    <Wrapper>
        <Box>
            <ThumbSkeleton />
            <HeaderWrapper>
                <Box mt={2}>
                    <TextItemSkeleton width={150} height={16} />
                </Box>
                <Box mt={2} flex justifyContent="flex-end">
                    <TextItemSkeleton width={100} height={16} />
                </Box>
            </HeaderWrapper>
            <ContentWrapper>
                <Box mt={2}>
                    <TextItemSkeleton height={20} />
                </Box>
                <Box mt={1}>
                    <TextItemSkeleton height={20} />
                </Box>
            </ContentWrapper>
        </Box>
    </Wrapper>
);

export default FeedbackItemSkeleton;
