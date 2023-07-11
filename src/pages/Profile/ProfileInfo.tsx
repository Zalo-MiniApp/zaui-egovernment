import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Profile } from "@dts";
import { Box, Text } from "zmp-ui";
import { CopyButton, Divider } from "@components/common";

const Wrapper = styled.div`
    ${tw`bg-white`}
`;

const InfoWrapper = styled.div`
    ${tw`rounded-[8px] border-devider_1 py-8 px-4 w-full border-[1px]`}
`;

const IDText = styled(Text.Title)`
    ${tw`text-text_1`}
`;

const RowDisplay = styled.div`
    ${tw`flex flex-row justify-between items-start`}

    &:not(:first-child) {
        margin-top: 8px;
    }
`;

const FieldName = styled(Text)`
    ${tw`text-text_1`}
    ${({ nowrap }: { nowrap?: string }) => {
        if (nowrap === "true") {
            return tw`whitespace-nowrap`;
        }
        return "";
    }}
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`;
const ValueText = styled(Text)`
    ${tw`text-text_2`}
    ${({ rowdisplay }: { rowdisplay?: string }) => {
        if (rowdisplay === "true") {
            return tw`pl-4`;
        }
        return "";
    }}
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`;

const NotiText = styled(Text)`
    ${tw`text-text_2 mt-2`}
    font-size: 16px;
    line-height: 22px;
`;
export type ProfileInfoProps = {
    profile: Profile;
};

const ProfileInfo: FC<ProfileInfoProps> = props => {
    const { profile } = props;
    const { profileCode, name, notifications } = profile;
    return (
        <Wrapper>
            <Box pt={3} pb={2} px={2}>
                <InfoWrapper>
                    <Box p={0}>
                        <RowDisplay>
                            <FieldName nowrap="true">Họ và tên:</FieldName>
                            <ValueText rowdisplay="true">{name}</ValueText>
                        </RowDisplay>
                    </Box>
                    <Box my={4}>
                        <Divider />
                    </Box>
                    <Box p={0} flex flexDirection="row" alignItems="center">
                        <IDText size="large">Mã số hồ sơ: {profileCode}</IDText>
                        <CopyButton content={profileCode ?? ""} />
                    </Box>

                    <Box my={4}>
                        <Divider />
                    </Box>

                    <Box>
                        <FieldName>Thông báo</FieldName>
                        {notifications?.map((noti, index) => (
                            <Box mt={1} key={`noti-message-${index + 1}`}>
                                <NotiText>
                                    Thông báo {index + 1}: {noti.message}
                                </NotiText>
                            </Box>
                        ))}
                    </Box>
                </InfoWrapper>
            </Box>
        </Wrapper>
    );
};

export default ProfileInfo;
