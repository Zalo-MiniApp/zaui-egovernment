import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box } from "zmp-ui";
import AvatarSkeleton from "./AvatarSkeleton";
import TextItemSkeleton from "./TextSketeton";

const Wrapper = styled.div``;

const RightWrapper = styled(Box)`
    flex: 1;
    ${tw`ml-2 pr-[96px]`}
`;

const OAItemSkeleton: React.FunctionComponent = () => (
    <Wrapper>
        <Box flex>
            <AvatarSkeleton />
            <RightWrapper>
                <TextItemSkeleton height={20} />
                <Box mt={1}>
                    <TextItemSkeleton />
                </Box>
            </RightWrapper>
        </Box>
    </Wrapper>
);

export default OAItemSkeleton;
