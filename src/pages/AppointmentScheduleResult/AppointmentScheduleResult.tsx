import React, {
    FC,
    RefObject,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Box, Text, Icon, useSnackbar } from "zmp-ui";
import "styled-components/macro";
import { useStore } from "@store";
import {
    OrdinalNumberCard,
    RejectedCard,
    PendingCard,
} from "@components/appointment-schedule";
import { IconButtonWithLabel } from "@components";
import html2canvas from "@xuannghia/html2canvas";
import { saveImageToGallery } from "zmp-sdk/apis";
import { saveImage } from "@service/zalo";
import { SCHEDULE_APPOINTMENT_STATUS } from "@constants";
const Container = styled.div`
    ${tw`bg-main p-2`}
`;
const ContentWrapper = styled(Box)`
    ${tw`bg-white rounded-lg border border-ng_20`}
`;

const StyledText = styled(Text)`
    ${tw`text-text_2 font-medium`}
`;

const AppointmentScheduleResult = forwardRef<HTMLDivElement, any>(
    (props, ref) => {
        const cardRef = useRef<HTMLDivElement | undefined>();
        const [image, setImage] = useState<string>();
        const schedule = useStore(state => state.schedule);
        const setError = useStore(state => state.setError);
        const { openSnackbar } = useSnackbar();

        const convertToCanvas = async (el?: HTMLElement) => {
            if (!el) return;
            const canvas = await html2canvas(el);
            const imageData = canvas.toDataURL();
            setImage(imageData);
        };

        useEffect(() => {
            convertToCanvas(cardRef.current);
        }, []);

        const handleDownloadCard = async () => {
            if (!image) {
                await convertToCanvas(cardRef.current);
            }
            try {
                if (!image) {
                    throw new Error();
                }
                await saveImage(image);
                openSnackbar({ type: "success", text: "Lưu ảnh thành công" });
            } catch (err) {
                setError({ message: "Đã có lỗi xảy ra, vui lòng thử lại" });
            }
        };

        if (!schedule) {
            return null;
        }
        const { status } = schedule;

        if (status === SCHEDULE_APPOINTMENT_STATUS.PENDING) {
            return (
                <Box p={2}>
                    <PendingCard />
                </Box>
            );
        }
        if (status === SCHEDULE_APPOINTMENT_STATUS.REJECTED) {
            return (
                <Box p={2}>
                    <RejectedCard />
                </Box>
            );
        }

        return (
            <>
                <OrdinalNumberCard
                    schedule={schedule}
                    ref={cardRef as RefObject<HTMLDivElement>}
                />
                <Box py={6} flex flexDirection="row" justifyContent="center">
                    <IconButtonWithLabel
                        label="Lưu về máy"
                        icon={<Icon icon="zi-download" />}
                        onClick={handleDownloadCard}
                    />
                </Box>
            </>
        );
    }
);

export default AppointmentScheduleResult;
