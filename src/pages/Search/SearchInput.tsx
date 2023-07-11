import { Button } from "@components/customized";

import React, { FC, useCallback } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Input } from "zmp-ui";
import { SearchProps } from "zmp-ui/input";

const StyledSearchInput = styled(Input.Search)`
    ${tw`bg-ng_10 flex-1 mr-3 border-0`}
    .zaui-input-search-button .zaui-btn-icon {
        color: #b9bdc1;
    }
    .zaui-input-clear-btn .zaui-input-clear-icon {
        color: #767a7f;
    }
`;

interface SearchInputProps extends SearchProps {
    onInputChange?: React.ChangeEventHandler<HTMLInputElement>;
    isValid?: boolean;
    onClickSearch?: React.MouseEventHandler<HTMLElement>;
    loading?: boolean;
}

const SearchInput: FC<SearchInputProps> = props => {
    const { onInputChange, isValid, onClickSearch, loading, ...rest } = props;

    const getSearchElement = useCallback(() => {
        const searchProps: SearchInputProps = {
            size: "small",
            clearable: true,
            ...rest,
        };

        searchProps.placeholder = "Nhập mã số hồ sơ";
        return <StyledSearchInput {...searchProps} onChange={onInputChange} />;
    }, [onInputChange]);

    return (
        <Box
            flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
        >
            {getSearchElement()}
            <Button
                size="small"
                disabled={!isValid}
                loading={loading}
                onClick={onClickSearch}
            >
                Tra cứu
            </Button>
        </Box>
    );
};

export default SearchInput;
