import { Divider } from "@components";
import AppCheckbox from "@components/customized/Checkbox";

import { useStore } from "@store";

import React, { useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Checkbox } from "zmp-ui";
import { CheckboxGroupProps, CheckboxValueType } from "zmp-ui/checkbox";

export interface IUploadImageResponse {
    domain: string;
    images: string[];
}

export interface FormItemValidate {
    status: "default" | "error";
    errorText?: string;
}

export interface FormValidate {
    title: FormItemValidate;
    content: FormItemValidate;
}

const Label = styled.div`
    ${tw`font-medium py-2`}
`;

const FeedbackGroup = styled(Checkbox.Group)`
    ${tw`flex flex-col gap-4 mt-2 text-[#767A7F]`}
`;

const FormItem = styled.div``;

export interface SelectFeedbackTypeProps
    extends Omit<CheckboxGroupProps, "onChange" | "value"> {
    onChange?: (id: string) => void;
    value?: CheckboxValueType;
}
const SelectFeedbackType: React.FC<SelectFeedbackTypeProps> = ({
    onChange,
    value,
}) => {
    const { id: organizationId } = useStore(state => state.organization) || {
        id: "",
    };

    const [feedbackTypes, getFeedbackTypes] = useStore(state => [
        state.feedbackTypes,
        state.getFeedbackTypes,
    ]);

    useEffect(() => {
        if (organizationId) {
            getFeedbackTypes({ organizationId });
        }
    }, [organizationId]);

    const onChangeType = e => {
        onChange?.(e.target.value);
    };

    return (
        <FormItem>
            <Label>Mục phản ánh</Label>

            {feedbackTypes && (
                <>
                    {" "}
                    <Box my={4}>
                        <Divider />
                    </Box>
                    <FeedbackGroup
                        value={value ? [value] : [feedbackTypes[0].id]}
                    >
                        {feedbackTypes.map(type => (
                            <AppCheckbox
                                onChange={onChangeType}
                                value={type.id}
                                key={`fb-type-${type.id}`}
                                label={type.title}
                            />
                        ))}
                    </FeedbackGroup>
                </>
            )}
        </FormItem>
    );
};

export default SelectFeedbackType;
