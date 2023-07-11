import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Checkbox } from "zmp-ui";
import { CheckboxProps } from "zmp-ui/checkbox";

const StyledCheckbox = styled(Checkbox)`
    .zaui-checkbox-inner {
        ${tw`rounded-3xl`}
    }

    &.zaui-checkbox-checked .zaui-checkbox-inner {
        ${tw`bg-main`}
    }
`;
const AppCheckbox: React.FC<CheckboxProps> = props => (
    <StyledCheckbox {...props} />
);

export default AppCheckbox;
