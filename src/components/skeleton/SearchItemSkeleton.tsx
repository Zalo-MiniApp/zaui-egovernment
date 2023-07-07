import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box } from "zmp-ui";
import TextItemSkeleton from "./TextSketeton";
const Wrapper = styled.div`
    padding: 16px 12px;
`;

const SearchItemSkeleton: React.FunctionComponent = () => {
    return (
        <Wrapper>
            <Box pr={6}>
                <Box mb={1}>
                    <TextItemSkeleton height={22} />
                </Box>
                <TextItemSkeleton />
            </Box>
        </Wrapper>
    );
};

export default SearchItemSkeleton;
