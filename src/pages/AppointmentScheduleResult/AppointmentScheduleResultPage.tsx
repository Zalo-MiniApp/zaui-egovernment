import PageLayout from "@components/layout/PageLayout";
import React, { FC } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import "styled-components/macro";
import AppointmentScheduleResult from "./AppointmentScheduleResult";

const OrdinalNumbersPage: FC<any> = () => (
    <PageLayout tw="!bg-main" title="Số thứ tự">
        <AppointmentScheduleResult />
    </PageLayout>
);

export default OrdinalNumbersPage;
