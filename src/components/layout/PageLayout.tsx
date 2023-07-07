import React, { ReactNode, useRef } from "react";
import styled from "styled-components";
import { Page } from "zmp-ui";
import { PageProps } from "zmp-ui/page";
import DefaultHeader from "./DefaultHeader";
import tw from "twin.macro";

interface PropsType extends PageProps {
    children?: ReactNode;
    title?: string;
    customHeader?: ReactNode;
    name?: string;
    restoreScroll?: boolean;
    restoreScrollBackOnly?: boolean;
    bg?: string;
}

const StyledPage = styled(Page)`
    ${tw`bg-[#EAEBED]`}
    padding: calc(var(--zaui-safe-area-inset-top, 0px) + 48px) 0 var(--zaui-safe-area-inset-bottom) 0;
    ${({ $bg }: { $bg?: string }) => {
        if (!$bg) {
            return "";
        }
        return {
            backgroundColor: $bg,
        };
    }}
`;

const PageLayout = React.forwardRef<HTMLDivElement, PropsType>((props, ref) => {
    const {
        title,
        children,
        customHeader,
        name,
        restoreScrollBackOnly = true,
        restoreScroll,
        bg,
        ...rest
    } = props;
    const pageRef = useRef<HTMLDivElement>(null);

    return (
        <StyledPage
            {...rest}
            restoreScroll={restoreScroll}
            restoreScrollOnBack={restoreScrollBackOnly}
            ref={pageRef}
            $bg={bg}
        >
            {customHeader ? customHeader : <DefaultHeader title={title} back />}
            {children}
        </StyledPage>
    );
});

export default PageLayout;
