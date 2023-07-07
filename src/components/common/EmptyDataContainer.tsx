import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box } from "zmp-ui";
import { ClockIcon } from "../icons";

const Wrapper = styled(Box)`
    ${tw`h-full flex flex-col items-center justify-center`}
`;

const TextContainer = styled.div`
    ${tw`my-4`}
`;

const EmptyDataContainer: React.FC<{
    emptyText?: string;
}> = props => {
    const { emptyText = "Dữ liệu đang cập nhật ..." } = props;

    return (
        <Wrapper>
            <ClockIcon />
            <TextContainer>{emptyText}</TextContainer>
        </Wrapper>
    );
};

export default EmptyDataContainer;
