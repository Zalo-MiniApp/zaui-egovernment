import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Icon } from "zmp-ui";

interface CollapseProps {
    defaultVisible?: boolean;
    children?: React.ReactNode;
    title?: string | React.ReactNode;
}
const Wrapper = styled.div`
    ${tw`last:border-b last:border-b-devider_1`}
`;
const SectionTrigger = styled.div`
    ${tw` relative flex items-center w-full cursor-pointer justify-between border-t border-t-devider_1 `}
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    padding: 16px;
`;

const ArrowIcon = styled(Icon)`
    ${tw`text-text_2`}
`;

const ContentContainer = styled.div`
    ${({ $sectionExpanded }: { $sectionExpanded: string }) => {
        if ($sectionExpanded === "true") {
            return tw`transition-all pt-0 duration-300 h-auto overflow-hidden`;
        }
        return tw`h-0  transition-all overflow-hidden duration-300`;
    }}
`;
const Collapse: React.FC<CollapseProps> = props => {
    const { defaultVisible, children, title } = props;
    const [visible, setVisible] = useState<boolean>(!!defaultVisible);
    const iconContent = visible ? "zi-chevron-down" : "zi-chevron-up";
    return (
        <Wrapper>
            <SectionTrigger
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {typeof title === "string" ? <span>{title}</span> : title}
                <ArrowIcon icon={iconContent} />
            </SectionTrigger>
            <ContentContainer $sectionExpanded={visible.toString()}>
                {children}
            </ContentContainer>
        </Wrapper>
    );
};

export default Collapse;
