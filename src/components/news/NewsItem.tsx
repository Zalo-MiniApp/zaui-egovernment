import React, { FC, useCallback } from "react";
import { Avatar, Box, Text } from "zmp-ui";
import { DateTime } from "@utils";
import styled from "styled-components";
import tw from "twin.macro";
import { Article } from "@dts";
import { openWebView } from "@service/zalo";

export interface NewsItemProps {
    data: Article;
}

const Wrapper = styled.div`
    ${tw`flex flex-row`}
    position: relative;
    &:not(:last-child)::after {
        content: "";
        position: absolute;
        bottom: -8px;
        height: 1px;
        background-color: #f4f5f6;
        width: 100%;
    }

    &:not(:first-child) {
        margin-top: 16px;
    }
`;

const ItemRight = styled(Box)`
    ${tw`flex-1 ml-3  overflow-hidden`}
`;

const Thumbnail = styled(Avatar)`
    ${tw`rounded bg-devider_1`};
    img {
        ${tw`rounded w-full h-full`}
    }
`;

const DateTimeText = styled(Text)`
    ${tw`text-text_2 mt-2`}
`;

const StyledTitle = styled(Text.Title)`
    ${tw`mt-2`};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const NewsItem: FC<NewsItemProps> = props => {
    const { data } = props;
    const { thumb, createdAt, title, link } = data;

    const openNewsItem = useCallback(() => {
        if (!link) {
            return;
        }
        try {
            openWebView(link);
        } catch (err) {
            console.log("ERR: ", err);
        }
    }, [link]);

    return (
        <Wrapper role="presentation" onClick={openNewsItem}>
            <Thumbnail size={80} src={thumb} />
            <ItemRight flex flexDirection="column">
                <DateTimeText size="xxSmall">
                    Ngày {DateTime.formatDate(createdAt || new Date())}
                </DateTimeText>
                <StyledTitle size="small">{title}</StyledTitle>
            </ItemRight>
        </Wrapper>
    );
};

export default NewsItem;
