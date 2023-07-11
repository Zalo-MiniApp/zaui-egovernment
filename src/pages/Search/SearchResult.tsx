import { ProfileIcon } from "@components/icons";
import { Profile } from "@dts";
import React, { useCallback } from "react";
import { createSearchParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon, List, Text, useNavigate } from "zmp-ui";

interface SearchResultProps {
    profile: Profile;
}

const StyledListItem = styled(List.Item)`
    .zaui-list-item-title {
        font-weight: 500;
    }
    .zaui-list-item-suffix {
        align-items: center;
        display: flex;
    }
    .zaui-list-item-right {
        width: 100%;
        .zaui-list-item-content {
            width: 100%;
            overflow: hidden;
            .zaui-list-item-title {
                ${tw`text-ellipsis w-full`}
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
`;

const FileText = styled(Text)`
    ${tw`font-bold text-text_2 ml-1`}
`;

const SearchResult = (props: SearchResultProps) => {
    const { profile } = props;
    const navigate = useNavigate();

    const goToDetailPage = useCallback(() => {
        if (!profile.profileCode) {
            return;
        }
        navigate({
            pathname: "/profile/",
            search: createSearchParams({ id: profile.profileCode }).toString(),
        });
    }, [profile.profileCode]);

    const onClickItem = () => {
        goToDetailPage();
    };

    return (
        <StyledListItem
            onClick={onClickItem}
            title={profile.name}
            subTitle={`Mã số hồ sơ: ${profile.profileCode}`}
            suffix={<Icon icon="zi-chevron-right" />}
        >
            <Box mt={2} flex alignItems="center">
                <ProfileIcon />
                <FileText size="small">Hồ sơ</FileText>
            </Box>
        </StyledListItem>
    );
};

export default SearchResult;
