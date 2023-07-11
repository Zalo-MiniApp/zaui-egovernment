import React, { ReactElement } from "react";
import { Button } from "zmp-ui";
import styled from "styled-components";
import tw from "twin.macro";
import { ButtonProps } from "zmp-ui/button";

const StyledButton = styled(Button)`
    ${tw`bg-main text-white`}
    &.zaui-btn-disabled:disabled {
        ${tw`bg-transparent`}
    }
    &.zaui-btn-loading {
        ${tw`bg-main text-white`}
    }
    &:focus,
    &:active {
        ${tw`bg-main text-white`}
    }
`;

const IconButtonWithLabelWrapper = styled.div`
    ${tw`flex flex-col items-center`}
`;

const Label = styled.div`
    ${tw`text-base text-white mt-2`}
`;

const StyledIconButton = styled(Button)`
    ${tw`bg-blk_a20 font-normal`}
`;

export const IconButtonWithLabel: React.FC<
    {
        icon: ReactElement;
        label: string;
    } & Pick<ButtonProps, "onClick">
> = ({ icon, label, onClick }) => (
    <IconButtonWithLabelWrapper>
        <StyledIconButton icon={icon} onClick={onClick} />
        <Label>{label}</Label>
    </IconButtonWithLabelWrapper>
);

const AppButton: React.FC<ButtonProps> = props => <StyledButton {...props} />;

export default AppButton;
