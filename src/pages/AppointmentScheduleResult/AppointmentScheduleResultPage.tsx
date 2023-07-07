import PageLayout from "@components/layout/PageLayout";
import React, {
    FC,
    MutableRefObject,
    RefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import tw from "twin.macro";
import "styled-components/macro";
import AppointmentScheduleResult from "./AppointmentScheduleResult";

const OrdinalNumbersPage: FC<any> = props => {
    return (
        <PageLayout tw="!bg-main" title="Số thứ tự">
            <AppointmentScheduleResult />
        </PageLayout>
    );
};

export default OrdinalNumbersPage;
