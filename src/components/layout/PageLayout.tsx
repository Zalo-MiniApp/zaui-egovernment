import React, { ReactNode, useImperativeHandle, useRef } from "react";
import styled from "styled-components";
import { Page } from "zmp-ui";
import { PageProps } from "zmp-ui/page";
import tw from "twin.macro";
import DefaultHeader from "./DefaultHeader";

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
        restoreScrollBackOnly = true,
        restoreScroll,
        bg,
        ...rest
    } = props;
    const pageRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => pageRef.current as HTMLDivElement);

    return (
        <StyledPage
            {...rest}
            restoreScroll={restoreScroll}
            restoreScrollOnBack={restoreScrollBackOnly}
            ref={pageRef}
            $bg={bg}
        >
            {customHeader || <DefaultHeader title={title} back />}
            {children}
        </StyledPage>
    );
});

export default PageLayout;
