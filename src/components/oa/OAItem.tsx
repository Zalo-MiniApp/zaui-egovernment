import { OA } from "@dts";
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Avatar, Button, List } from "zmp-ui";
import Logo from "@assets/logo.png";
import { useStore } from "@store";

export interface OAItemProps {
    officialAccount: OA;
}

const Wrapper = styled(List.Item)`
    padding: 0;
    .zaui-list-item-subtitle {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 12px;
    }
    .zaui-list-item-title-container {
        height: 20px;
    }
    .zaui-list-item-title {
        font-size: 15px;
        line-height: 20px;
        font-weight: 500;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .zaui-list-item-prefix {
        margin-right: 8px;
    }
    .zaui-list-item-right {
        overflow: hidden;
        align-items: center;
    }
    .zaui-list-item-content {
        overflow: hidden;
    }
`;
const OAItem: FunctionComponent<OAItemProps> = props => {
    const { officialAccount } = props;
    const { name, logoUrl, oaId, follow } = officialAccount;
    const followOA = useStore(state => state.followOA);
    const addressStr = `${name}`;

    const handleFollowOA = () => {
        followOA({ id: oaId });
    };
    return (
        <Wrapper
            title={name}
            subTitle={addressStr}
            prefix={<Avatar size={40} src={logoUrl || Logo} />}
            suffix={
                <Button
                    size="small"
                    variant="secondary"
                    type="neutral"
                    disabled={follow}
                    onClick={handleFollowOA}
                >
                    Quan Tâm
                </Button>
            }
        />
    );
};

export default OAItem;
