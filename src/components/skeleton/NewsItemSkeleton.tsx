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

const RightWrapper = styled(Box)`
    ${tw`flex-1 ml-3  overflow-hidden`}
`;

const ThumbSkeleton = styled.div`
    ${tw`bg-devider_1 animate-pulse rounded`}
    width: 80px;
    height: 80px;
`;

const NewsItemSkeleton: React.FunctionComponent = () => (
    <Wrapper>
        <Box flex>
            <ThumbSkeleton />
            <RightWrapper>
                <Box mt={2}>
                    <TextItemSkeleton height={16} />
                </Box>
                <Box mt={2}>
                    <TextItemSkeleton height={20} />
                </Box>
                <Box mt={1}>
                    <TextItemSkeleton height={20} />
                </Box>
            </RightWrapper>
        </Box>
    </Wrapper>
);

export default NewsItemSkeleton;
