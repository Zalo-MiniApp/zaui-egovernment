import React from "react";
import { Route } from "react-router-dom";
import { AnimationRoutes, ZMPRouter } from "zmp-ui";

import {
    FeedbackPage,
    FeedbackDetailPage,
    CreateFeedbackPage,
} from "./Feedback";
import { GuidelinesPage } from "./Guidelines";
import { HomePage } from "./Home";
import { InformationGuidePage } from "./InformationGuide";
import { CreateScheduleAppointmentPage } from "./CreateScheduleAppointment";
import { AppointmentScheduleResultPage } from "./AppointmentScheduleResult";
import { SearchPage } from "./Search";
import { ProfilePage } from "./Profile";

const Routes: React.FC = () => (
    <ZMPRouter>
        <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />

            <Route path="/feedbacks" element={<FeedbackPage />} />
            <Route path="/feedbacks/:id" element={<FeedbackDetailPage />} />
            <Route path="/create-feedback" element={<CreateFeedbackPage />} />
            <Route
                path="/create-schedule-appointment"
                element={<CreateScheduleAppointmentPage />}
            />
            <Route
                path="/schedule-appointment-result"
                element={<AppointmentScheduleResultPage />}
            />
            <Route
                path="/information-guide"
                element={<InformationGuidePage />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </AnimationRoutes>
    </ZMPRouter>
);

export default Routes;
