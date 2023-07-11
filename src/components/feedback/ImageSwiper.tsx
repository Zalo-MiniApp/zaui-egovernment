import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, ImageViewer, Swiper } from "zmp-ui";
import { ImageType } from "zmp-ui/image-viewer";

const FeedbackSwiper = styled(Swiper)`
    ${tw`rounded-none`}
    .zaui-swiper-dots {
        .zaui-swiper-dots-item.zaui-swiper-dots-item-active {
            ${tw`bg-main`}
        }
        .zaui-swiper-dots-item {
            ${tw`w-1 h-1 bg-wth_a70`}
        }
    }
`;

export interface ImageSwiperProps {
    imageUrls: string[];
}

const Image = styled.img`
    ${tw`object-cover h-[18rem] w-full`}
`;

const ImageSwiper: React.FC<ImageSwiperProps> = ({ imageUrls }) => {
    const [imgs, setImgs] = useState<ImageType[]>([]);

    useEffect(() => {
        setImgs(
            imageUrls?.map((img, index) => ({
                src: img,
                alt: `slide${index}`,
            })),
        );
    }, [imageUrls]);

    const [visible, setVisible] = useState<boolean>(false);

    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <Box
            flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <FeedbackSwiper>
                {imgs.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Swiper.Slide key={index}>
                        <Image
                            src={item.src}
                            alt={item.alt}
                            onClick={() => {
                                setActiveIndex(index);
                                setVisible(true);
                            }}
                        />
                    </Swiper.Slide>
                ))}
            </FeedbackSwiper>

            <ImageViewer
                onClose={() => setVisible(false)}
                activeIndex={activeIndex}
                images={imgs}
                visible={visible}
            />
        </Box>
    );
};

export default ImageSwiper;
