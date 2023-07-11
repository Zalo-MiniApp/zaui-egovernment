import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Input } from "zmp-ui";
import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";
import { InputProps, InputRef, TextAreaProps, TextAreaRef } from "zmp-ui/input";

const StyledInput = styled(Input)`
    ${tw`bg-ng_10 border-transparent focus:border-transparent focus-visible:border-transparent`}
    .zaui-input-group-addon {
        ${tw`mb-3`}

        .zaui-input-label {
            ${tw`text-[15px] [line-height: 20px] text-text_1 font-medium`}
        }
    }
    .zaui-input-status-error {
        ${tw`border-[ #dc1f18]`}
    }
`;

const StyledTextArea = styled(Input.TextArea)`
    ${tw`bg-ng_10 border-transparent focus:border-t-transparent focus-visible:border-transparent`}
    .zaui-input-group-addon {
        ${tw`mb-3`}

        .zaui-input-label {
            ${tw`text-[15px] [line-height: 20px] text-text_1 font-medium`}
        }
    }
`;

const GolbalStyle = createGlobalStyle`
    .zaui-input-textarea-affix-wrapper,.zaui-input-affix-wrapper{
        ${tw`bg-ng_10 border-transparent focus:border-t-transparent focus-visible:border-transparent`}
    }
    .zaui-input-textarea-affix-wrapper,.zaui-input-affix-wrapper,.zaui-input-group-wrapper-status-error{
 
        .zaui-input-textarea,.zaui-input-affix-wrapper-status-error,&.zaui-input-affix-wrapper-status-error {
            ${tw`border-[ #dc1f18]`}
        }
    }
`;

const AppInput: React.FC<InputProps> = forwardRef((props, ref) => {
    const inputRef = useRef<InputRef>(null);
    useImperativeHandle(ref, () => inputRef.current?.input);

    return <StyledInput {...props} ref={inputRef} />;
});

export const TextArea: React.FC<TextAreaProps> = forwardRef((props, ref) => {
    const inputRef = useRef<TextAreaRef>(null);
    useImperativeHandle(ref, () => inputRef.current?.textarea);
    return (
        <>
            <GolbalStyle />
            <StyledTextArea {...props} ref={inputRef} />
        </>
    );
});
export default AppInput;
