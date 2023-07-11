import PageLayout from "@components/layout/PageLayout";
import React, { useCallback, useState } from "react";
import { Box, Input } from "zmp-ui";
import styled from "styled-components";
import tw from "twin.macro";
import AppButton from "@components/customized/Button";
import { useStore } from "@store";
import SearchResultList from "./SearchResultList";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PropsType {}

const Wrapper = styled(Box)`
    ${tw`bg-white`}
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

const SearchPage: React.FC<PropsType> = () => {
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

    const handleSearch = useCallback(() => {
        searchProfiles({ profileCode: SearchValue });
    }, [searchProfiles, SearchValue]);

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
                        />
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
