import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Utinity } from "@dts";
import { Box, List, Text } from "zmp-ui";
import Item from "./VerticalListItem";

interface VerticalListPorps {
    utinities: Utinity[];
    title?: string;
}

const Wrapper = styled.div`
    ${tw`bg-ui_bg mt-2`};
    padding: 16px;
`;

const VerticalList: FunctionComponent<VerticalListPorps> = props => {
    const { utinities, title } = props;
    return (
        <Wrapper>
            <Box mb={4}>
                <Text.Title size="small">{title}</Text.Title>
            </Box>
            <List noSpacing divider={false}>
                {utinities.map(item => {
                    const { key, ...utinity } = item;
                    return <Item key={key} {...utinity} />;
                })}
            </List>
        </Wrapper>
    );
};

export default VerticalList;
