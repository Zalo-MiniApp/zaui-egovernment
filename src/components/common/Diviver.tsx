import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledDivider = styled.div`
    ${tw`w-full h-[1px] bg-devider_1`}
`;
const Divider: React.FC<any> = () => <StyledDivider />;

export default Divider;
