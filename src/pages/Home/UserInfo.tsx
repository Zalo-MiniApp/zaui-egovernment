import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Avatar, Box, Text } from "zmp-ui";
import Background from "@assets/background.png";
import { useStore } from "@store";
import { StringUtils } from "@utils";
import { AvatarSkeleton, TextItemSkeleton } from "@components/skeleton";

const Wrapper = styled.div`
    ${tw`flex flex-col items-center`};
    background-image: url(${Background});
    background-position: center;
    padding: 24px 0;
`;

const TextName = styled(Text)`
    color: #141415;
    font-weight: 500;
`;

const UserInfo: FunctionComponent = () => {
    const [user, loading] = useStore(state => [
        state.user,
        state.loadingUserInfo,
    ]);

    const renderSkeleton = () => (
        <>
            <Box mb={3}>
                <AvatarSkeleton size={48} />
            </Box>
            <TextItemSkeleton height={22} width={120} />
        </>
    );
    return (
        <Wrapper>
            {user && !loading && (
                <>
                    <Box mb={3}>
                        <Avatar src={user.avatar}>
                            {StringUtils.getAvatarName({ name: user.name })}
                        </Avatar>
                    </Box>
                    <TextName size="large">{user.name}</TextName>
                    {/* <TextPhoneNumber size="small">{phoneNumber}</TextPhoneNumber> */}
                </>
            )}
            {loading && renderSkeleton()}
        </Wrapper>
    );
};

export default UserInfo;
