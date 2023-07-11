import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { Button, Icon, useSnackbar } from "zmp-ui";

import tw from "twin.macro";

interface CopyButtonProps {
    content: string;
}

const StyledButton = styled(Button)`
    ${tw`text-main ml-1`}
    &.zaui-btn-medium {
        padding: 0px 0px;
        width: 24px;
        height: 24px;
    }
`;

const CopyButton: FC<CopyButtonProps> = ({ content }) => {
    const { openSnackbar } = useSnackbar();
    const handleCopyContent = useCallback(() => {
        navigator.clipboard.writeText(content);
        openSnackbar({ text: "Sao chép thành công" });
    }, [content]);

    return (
        <StyledButton
            size="medium"
            variant="tertiary"
            icon={<Icon icon="zi-copy" />}
            onClick={handleCopyContent}
        />
    );
};

export default CopyButton;
