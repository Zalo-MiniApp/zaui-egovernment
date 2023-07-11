import React, { FC, useEffect } from "react";
import PageLayout from "@components/layout/PageLayout";
import { useStore } from "@store";
import { useNavigate } from "zmp-ui";
import { CreateScheduleForm } from "./CreateScheduleForm";

const CreateScheduleAppointmentPage: FC<any> = () => {
    const navigate = useNavigate();
    const getSchedule = useStore(state => state.getSchedule);
    const [schedule, gettingSchedule] = useStore(state => [
        state.schedule,
        state.gettingSchedule,
    ]);

    useEffect(() => {
        getSchedule();
    }, []);

    useEffect(() => {
        if (!gettingSchedule && schedule) {
            navigate("/schedule-appointment-result", {
                replace: true,
                animate: false,
            });
        }
    }, [gettingSchedule, schedule]);

    if (!gettingSchedule && schedule) {
        return null;
    }

    return (
        <PageLayout title="Đặt lịch làm việc">
            <CreateScheduleForm />
        </PageLayout>
    );
};

export default CreateScheduleAppointmentPage;
