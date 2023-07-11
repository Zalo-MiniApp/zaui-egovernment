import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { List } from "zmp-ui";

import { ImageIcon } from "@components/icons";
import { Utinity } from "@dts";
import WithItemClick from "./WithItemClick";

export interface ItemProps extends Utinity {
    handleClickUtinity?: ({
        inDevelopment,
        path,
        phoneNumber,
        link,
    }: {
        inDevelopment?: boolean | undefined;
        path?: string | undefined;
        phoneNumber?: string | undefined;
        link?: string | undefined;
    }) => void;
}

const StyledListItem = styled(List.Item)`
    ${tw`px-0 py-2`}
    .zaui-list-item-content {
        display: flex;
        align-items: center;
    }
    .zaui-list-item-content {
        overflow: hidden;
    }
`;

const UtinityItem: FunctionComponent<ItemProps> = props => {
    const { iconSrc, label, handleClickUtinity } = props;

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        event.preventDefault();
        handleClickUtinity?.(props);
    };

    return (
        <StyledListItem
            onClick={handleClick}
            prefix={<ImageIcon src={iconSrc} />}
            title={label}
        />
    );
};

export default WithItemClick(UtinityItem);
