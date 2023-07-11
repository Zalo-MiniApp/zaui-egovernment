import { Button, Divider, ImageUpload, TextArea, Input } from "@components";
import { RATE_LIMIT_CODE } from "@constants";
import { MAX_FEEDBACK_IMAGES } from "@constants/common";
import { AppError } from "@dts";
import { useStore } from "@store";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon } from "zmp-ui";
import { ImageType } from "zmp-ui/image-viewer";
import { useForm } from "react-hook-form";
import SelectFeedbackType from "./SelectFeedbackType";

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

const Conainer = styled(Box)`
    ${tw`bg-white`}
`;

const SendButton = styled(Button)`
    ${tw`w-full mt-6`}
`;

export interface CreateFeedbackFormProps {
    successCallback?: (status?: boolean) => void;
}
const CreateFeedbackForm: React.FC<CreateFeedbackFormProps> = ({
    successCallback,
}) => {
    const [loading, createFeedback] = useStore(state => [
        state.creatingFeedback,
        state.createFeedback,
    ]);

    const [imageUrls, setImageUrls] = useState<
        (ImageType & { name: string })[]
    >([]);

    const [type, setType] = useState<string>();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const onSubmit = async data => {
        const { title, content } = data;

        try {
            // const res = await getPhoneNumber({});

            await postFeedback({
                token: "",
                title,
                content,
                feedBackTypeId: Number(type),
                imageUrls: imageUrls.map(img => img.name),
            });
        } catch (err) {
            setError({
                message: "Có lỗi xảy ra, vui lòng thử lại sau!",
            });
        }
    };

    const handleImagesChange = imgs => {
        setImageUrls(imgs);
    };

    const handleFeedbackTypeChange = id => {
        setType(id);
    };

    const getFieldName = (field: string) => {
        switch (field) {
            case "title":
                return "Tiêu đề";
            case "content":
                return "Nội dung";
            default:
                return "";
        }
    };

    const getErrorMessage = (field: string) => {
        if (errors[field]) {
            const name = getFieldName(field);
            if (errors[field]?.type === "required")
                return `${name} không được để trống`;
            return `${name} không hợp lệ`;
        }
        return "";
    };

    const { id: organizationId } = useStore(state => state.organization) || {
        id: "",
    };

    const setError = useStore(state => state.setError);

    const postFeedback = async (params: {
        token: string;
        title: string;
        content: string;
        imageUrls?: string[];
        feedBackTypeId: number;
    }) => {
        try {
            if (!organizationId) {
                return;
            }
            const feedback = {
                title: params.title,
                content: params.content,
                imageUrls: params.imageUrls,
                feedbackTypeId: params.feedBackTypeId,
                token: params.token,
            };
            const status = await createFeedback(feedback, organizationId);
            successCallback?.(status);
        } catch (err) {
            if (err) {
                const { message, code } = err as AppError;
                if (code === RATE_LIMIT_CODE.code) {
                    setError({
                        code,
                        message,
                    });
                } else {
                    setError({
                        message: "Có lỗi xảy ra, vui lòng thử lại sau!",
                    });
                }
            }
        }
    };

    return (
        <Conainer p={4} m={0}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <Input
                        placeholder="Nhập nội dung"
                        label="Tiêu đề*"
                        errorText={getErrorMessage("title")}
                        {...register("title", { required: true })}
                        status={errors?.title ? "error" : "default"}
                    />
                </Box>
                <Box mt={4}>
                    <TextArea
                        placeholder="Nhập nội dung"
                        label="Nội dụng phản ánh*"
                        errorText={getErrorMessage("content")}
                        {...register("content", { required: true })}
                        status={errors?.content ? "error" : "default"}
                    />
                </Box>

                <Box my={4}>
                    <Divider />
                </Box>

                <Box>
                    <ImageUpload
                        label="Ảnh đính kèm"
                        maxItemSize={1024 * 1024}
                        maxSelect={MAX_FEEDBACK_IMAGES}
                        onImagesChange={handleImagesChange}
                    />
                </Box>

                <Box my={4}>
                    <Divider />
                </Box>

                <SelectFeedbackType
                    value={type}
                    onChange={handleFeedbackTypeChange}
                />

                <SendButton
                    loading={loading}
                    htmlType="submit"
                    suffixIcon={<Icon icon="zi-chevron-right" />}
                >
                    Gửi phản ánh
                </SendButton>
            </form>
        </Conainer>
    );
};

export default CreateFeedbackForm;
