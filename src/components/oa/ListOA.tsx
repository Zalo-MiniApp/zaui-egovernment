import React, { FC } from "react";
import styled from "styled-components";
import { Box, List, Text } from "zmp-ui";
import tw from "twin.macro";
import { OAItemSkeleton } from "@components/skeleton";
import { useStore } from "@store";
import OAItem from "./OAItem";

const ListWrapper = styled(Box)`
    ${tw`bg-ui_bg`};
`;

const SubTitle = styled(Text)`
    ${tw`text-text_2`}
`;
const ListOAStyled = styled(List)`
    padding: 8px 0;
    margin-top: 16px;
`;
const ListOA: FC<any> = () => {
    const { officialAccounts } = useStore(state => state.organization) || {
        officialAccounts: [],
    };
    const loading = useStore(state => state.gettingOrganization);

    return (
        <ListWrapper mt={2} p={4}>
            <Text.Title size="small">Danh bạ</Text.Title>
            <SubTitle size="small">OA chính thức của cơ quan nhà nước</SubTitle>

            <ListOAStyled>
                {!loading &&
                    officialAccounts?.map(item => (
                        <OAItem key={item.oaId} officialAccount={item} />
                    ))}
                {loading && <OAItemSkeleton />}
            </ListOAStyled>
        </ListWrapper>
    );
};

export default ListOA;
