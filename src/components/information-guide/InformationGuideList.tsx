/* eslint-disable no-nested-ternary */
import EmptyDataContainer from "@components/common/EmptyDataContainer";
import InformationGuideItemSkeleton from "@components/skeleton/InformationGuideItemSkeleton";
import { InformationGuide } from "@dts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import InformationGuideItem from "./InformationGuideItem";

export interface InformationGuideListProps {
    data: InformationGuide[];
    loading?: boolean;
}

const Wrapper = styled.div`
    ${tw`bg-ui_bg`};
`;

const EmptyWrapper = styled.div`
    ${tw`h-[94vh]`}
`;

const InformationGuideList = React.forwardRef<
    HTMLDivElement,
    InformationGuideListProps
>((props, ref) => {
    const { data, loading = true } = props;

    return (
        <Wrapper id="informationGuides" ref={ref}>
            {data.map(item => (
                <InformationGuideItem
                    data={item}
                    key={`infor-guide-${item.id}`}
                />
            ))}
            {loading ? (
                [...Array(5)].map((item, index) => (
                    <InformationGuideItemSkeleton
                        key={`ìnormation-guide-skeleton-${index}`}
                    />
                ))
            ) : data.length === 0 ? (
                <EmptyWrapper>
                    <EmptyDataContainer />
                </EmptyWrapper>
            ) : (
                ""
            )}
        </Wrapper>
    );
});

export default InformationGuideList;
