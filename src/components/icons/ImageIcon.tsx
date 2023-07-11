import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface ImageIconProps {
    src?: string;
}

const Container = styled("div")`
    ${tw`w-10 h-10 rounded-lg p-2 relative flex justify-center items-center bg-ng_10`}
`;
const IconImg = styled("img")`
    ${tw`w-full h-auto block `}
`;

const ImageIcon: FC<ImageIconProps> = ({ src }) => (
    <Container>
        <IconImg src={src} alt="" />
    </Container>
);

export default ImageIcon;
