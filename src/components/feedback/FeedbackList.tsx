/* eslint-disable no-nested-ternary */
import EmptyDataContainer from "@components/common/EmptyDataContainer";
import FeedbackItemSkeleton from "@components/skeleton/FeedbackItemSkeleton";
import { Feedback } from "@dts";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import FeedbackItem from "./FeedbackItem";

const Wrapper = styled.div`
    ${tw`bg-ui_bg border-[1px] border-devider_1 rounded mt-4`};
    padding: 16px 8px;
`;

const EmptyWrapper = styled.div`
    ${tw`h-[72vh]`}
`;
const Hr = styled.div`
    ${tw`border-b-[1.5px] border-[#F4F5F6] my-2`}
`;

export interface FeedbackListProps {
    data: Feedback[];
    loading?: boolean;
}

const FeedbackList = React.forwardRef<HTMLDivElement, FeedbackListProps>(
    (props, ref) => {
        const { data, loading = true } = props;

        return (
            <Wrapper id="feedbackList" ref={ref}>
                {data.map((item, index) => (
                    <div key={`fb-item-${item.id}`}>
                        <FeedbackItem data={item} />

                        {index !== data.length - 1 && <Hr />}
                    </div>
                ))}

                {loading ? (
                    [...Array(5)].map((item, index) => (
                        <FeedbackItemSkeleton
                            // eslint-disable-next-line react/no-array-index-key
                            key={`feedback-item-skeleton-${index}`}
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
    },
);

export default FeedbackList;
