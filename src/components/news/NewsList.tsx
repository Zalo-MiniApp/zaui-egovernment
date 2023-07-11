import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Article } from "@dts";
import NewsItemSkeleton from "@components/skeleton/NewsItemSkeleton";
import NewsItem from "./NewsItem";

export interface NewsListProps {
    data: Article[];
    loading?: boolean;
}

const Wrapper = styled.div`
    ${tw`bg-ui_bg border-[1px] border-devider_1 rounded mt-4`};
    padding: 16px 8px;
`;

const NewsList = React.forwardRef<HTMLDivElement, NewsListProps>(
    (props, ref) => {
        const { data, loading = true } = props;

        return (
            <Wrapper id="articles" ref={ref}>
                {data.map(item => (
                    <NewsItem data={item} key={item.id} />
                ))}
                {loading && (
                    <>
                        <NewsItemSkeleton />
                        <NewsItemSkeleton />
                        <NewsItemSkeleton />
                    </>
                )}
            </Wrapper>
        );
    },
);

export default NewsList;
