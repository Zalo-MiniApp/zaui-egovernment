import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
    ${tw`animate-pulse`}
`;
const FakeText = styled.div`
    ${tw` bg-devider_1 rounded-full  w-full`}
    ${({
        height,
        width,
    }: {
        height: number;
        width?: number;
    }) => `height: ${height}px;
        width: ${width ? `${width}px;` : "100%;"}`}
    ${({ color }: { color?: string }) => {
        if (color) {
            return `background-color: ${color};`;
        }
        return "";
    }}
`;

const TextItemSkeleton: React.FunctionComponent<{
    height?: number;
    color?: string;
    width?: number;
}> = ({ height, color, width }) => (
    <Wrapper>
        <FakeText height={height || 18} color={color} width={width} />
    </Wrapper>
);

export default TextItemSkeleton;
