import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Icon, ImageViewer } from "zmp-ui";
import { ImageType } from "zmp-ui/image-viewer";
import { pickImages } from "@service/zalo";
import { API, BASE_URL, MAX_FEEDBACK_IMAGES } from "@constants/common";
import { useStore } from "@store";
import { ChangeHandler } from "react-hook-form";

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

const IconUploadContainer = styled.div`
    ${tw`col-span-1 bg-[#F4F5F6] w-[100px] h-[100px] p-4  rounded-lg text-[#B9BDC1] flex items-center justify-center flex-col`}
`;

const ImageContainer = styled.div`
    ${tw`grid grid-cols-4 gap-1`}
`;

const Image = styled.img`
    ${tw`col-span-1 object-cover w-[100px] h-[100px] rounded-lg`}
`;

const Container = styled(Box)``;

export interface ImageUploadProps {
    onImagesChange?: (images: Array<ImageType & { name: string }>) => void;
    onChange?: ChangeHandler;
    label?: string;
    maxSelect?: number;
    maxItemSize?: number;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
    onImagesChange,
    label,
    maxSelect,
    maxItemSize,
    onChange,
}) => {
    const [imgViewerVisible, setImgViewerVisible] = useState<boolean>(false);
    const { setError } = useStore();
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [imageUrls, setImageUrls] = useState<
        Array<ImageType & { name: string }>
    >([]);

    const onClickUpload = async () => {
        try {
            const images = await pickImages({
                maxItemSize,
                maxSelectItem: maxSelect ? maxSelect - imageUrls.length : 1,
                serverUploadUrl: BASE_URL + API.UPLOAD_IMAGE,
            });
            setImageUrls([...imageUrls, ...images]);
        } catch (err) {
            setError({ message: "Chọn hình ảnh thất bại" });
        }
    };

    useEffect(() => {
        onImagesChange?.(imageUrls);
        onChange?.({
            target: {
                value: [...imageUrls],
            },
        });
    }, [imageUrls]);

    return (
        <Container>
            <Label>{label}</Label>

            <ImageContainer>
                {imageUrls &&
                    imageUrls.map((img, index) => (
                        <Image
                            key={`img-${index}`}
                            src={img.src}
                            alt=""
                            onClick={() => {
                                setActiveIndex(index);
                                setImgViewerVisible(true);
                            }}
                        />
                    ))}

                {imageUrls.length < MAX_FEEDBACK_IMAGES && (
                    <IconUploadContainer onClick={onClickUpload}>
                        <Icon icon="zi-plus" />
                    </IconUploadContainer>
                )}

                <ImageViewer
                    onClose={() => setImgViewerVisible(false)}
                    activeIndex={activeIndex}
                    images={imageUrls}
                    visible={imgViewerVisible}
                />
            </ImageContainer>
        </Container>
    );
};

export default ImageUpload;
