import styled from "styled-components";
import tw from "twin.macro";
import { Text } from "zmp-ui";

export const RowDisplay = styled.div`
    ${tw`flex flex-row justify-between items-start`}

    &:not(:first-child) {
        margin-top: 8px;
    }
`;

export const FieldName = styled(Text)`
    ${tw`text-text_1`}
    ${({ $nowrap }: { $nowrap?: string }) => {
        if ($nowrap === "true") {
            return tw`whitespace-nowrap`;
        }
        return "";
    }}
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`;
export const ValueText = styled(Text)`
    ${tw`text-text_2`}
    ${({ $rowdisplay }: { $rowdisplay?: string }) => {
        if ($rowdisplay === "true") {
            return tw`pl-4`;
        }
        return "";
    }}
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`;
