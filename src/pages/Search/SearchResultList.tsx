import { SearchItemSkeleton } from "@components/skeleton";
import { SEARCH_NOT_FOUND } from "@constants";
import { Profile } from "@dts";
import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Text } from "zmp-ui";
import SearchResult from "./SearchResult";

interface SearchResultListProps {
    profiles?: Profile[];
    loading?: boolean;
}

const Wrapper = styled.div`
    position: relative;
    ${({ $fullHeight }: { $fullHeight: "true" | "false" }) => {
        if ($fullHeight === "true") {
            return `min-height: calc(100vh - calc(104px + var(--zaui-safe-area-inset-top, 0px)));`;
        }
        return "";
    }}
    display: flex;
    flex-direction: column;
`;

const ResultText = styled(Text.Title)`
    ${tw`text-text_3 mb-3 mt-4`}
`;

const InfoText = styled(Text)`
    ${tw`text-text_2 text-center`}
`;
const InfoWrapper = styled(Box)`
    ${tw`flex items-center justify-center flex-1 bg-white`}
`;

const SearchResultList: FC<SearchResultListProps> = props => {
    const { loading, profiles: searchResult } = props;
    const isEmpty = !(searchResult && searchResult.length && !loading);
    const getSearchResult = () => {
        if (loading) {
            return <SearchItemSkeleton />;
        }

        if (!searchResult || !searchResult.length) {
            return (
                <InfoWrapper>
                    <InfoText size="small">{SEARCH_NOT_FOUND}</InfoText>
                </InfoWrapper>
            );
        }

        return searchResult.map(profile => (
            <SearchResult key={profile.profileCode} profile={profile} />
        ));
    };
    return (
        <Wrapper $fullHeight={isEmpty ? "true" : "false"}>
            <Box px={4}>
                <ResultText size="small">Kết quả tìm kiếm</ResultText>
            </Box>

            {getSearchResult()}
        </Wrapper>
    );
};

export default SearchResultList;
