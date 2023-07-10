import React, {
    RefObject,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";
import { Box, Icon, useSnackbar } from "zmp-ui";
import "styled-components/macro";
import { useStore } from "@store";
import {
    OrdinalNumberCard,
    RejectedCard,
    PendingCard,
} from "@components/appointment-schedule";
import { IconButtonWithLabel } from "@components";
import html2canvas from "@xuannghia/html2canvas";
import { saveImage } from "@service/zalo";
import { SCHEDULE_APPOINTMENT_STATUS } from "@constants";

const AppointmentScheduleResult = forwardRef<HTMLDivElement, any>(() => {
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
});

export default AppointmentScheduleResult;
