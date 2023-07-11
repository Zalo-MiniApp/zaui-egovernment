import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Radio } from "zmp-ui";
import { RadioProps } from "zmp-ui/radio";

const StyledRadio = styled(Radio)`
    .zaui-radio-checked .zaui-radio-checkmark {
        ${tw`bg-main`}
    }
`;
const AppRadio: React.FC<RadioProps> = props => <StyledRadio {...props} />;

export default AppRadio;
