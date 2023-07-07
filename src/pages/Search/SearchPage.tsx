import PageLayout from "@components/layout/PageLayout";
import React, { useCallback, useState } from "react";
import { Box, Input, Text } from "zmp-ui";
import styled from "styled-components";
import tw from "twin.macro";
import AppButton from "@components/customized/Button";
import SearchResultList from "./SearchResultList";
import { useStore } from "@store";
interface PropsType {}

const Wrapper = styled(Box)`
    ${tw`bg-white`}
`;

const Title = styled(Text.Title)`
    ${tw`text-text_3`}
`;

const StyledSearchInput = styled(Input.Search)`
    ${tw`bg-ng_10 flex-1 mr-3 border-0 `}
    .zaui-input-search-button .zaui-btn-icon {
        color: #b9bdc1;
    }
    .zaui-input-clear-btn .zaui-input-clear-icon {
        color: #767a7f;
    }
`;

const SearchBtn = styled(AppButton)`
    padding-left: 56px;
    padding-right: 56px;
`;
const SearchPage: React.FC<PropsType> = props => {
    const [SearchValue, setSearchValue] = useState<string>("");
    const [loading, profiles, searchProfiles] = useStore(state => [
        state.searchingProfiles,
        state.profiles,
        state.searchProfiles,
    ]);

    const disabled = !SearchValue;

    const handleSearchChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e?.target.value as string);
    };

    const handleSearch = useCallback(
        (event?: React.MouseEvent<HTMLElement>) => {
            searchProfiles({ profileCode: SearchValue });
        },
        [searchProfiles, SearchValue]
    );

    return (
        <PageLayout title="Tra cứu hồ sơ">
            <Wrapper p={0}>
                <form>
                    <Box
                        px={4}
                        pt={4}
                        pb={0}
                        flex
                        flexDirection="row"
                        alignItems="center"
                    >
                        <StyledSearchInput
                            id="profileCode"
                            name="profileCode"
                            value={SearchValue}
                            placeholder="Nhập mã tra cứu"
                            clearable
                            size="small"
                            onChange={handleSearchChange}
                        ></StyledSearchInput>
                        <AppButton
                            disabled={disabled || loading}
                            onClick={handleSearch}
                            size="small"
                        >
                            Tra cứu
                        </AppButton>
                    </Box>
                </form>
                <SearchResultList loading={loading} profiles={profiles} />
            </Wrapper>
        </PageLayout>
    );
};

export default SearchPage;
