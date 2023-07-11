import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const AvatarSkeletonStyled = styled.div`
    ${({ size }: { size?: number }) => {
        if (size) {
            return `
							width: ${size}px;
							height: ${size}px;`;
        }
        return `
						width: 40px;
						height: 40px;
						`;
    }}

    ${tw`bg-devider_1 animate-pulse rounded-full`}
`;

const AvatarSkeleton: React.FunctionComponent<{ size?: number }> = ({
    size,
}) => <AvatarSkeletonStyled size={size} />;

export default AvatarSkeleton;
