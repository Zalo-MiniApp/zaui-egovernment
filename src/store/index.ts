import { create, StateCreator, StoreMutatorIdentifier } from "zustand";
import { devtools } from "zustand/middleware";
import createAppStore, { AppSlice } from "./appSlice";
import createAuthStore, { AuthSlice } from "./authSlice";
import createFeedbackSlide, { FeedbackSlice } from "./feedbackSlice";
import createInformationGuideSlide, {
    InformationGuideSlice,
} from "./informationGuideSlice";
import createOrganizationSlide, {
    OrganizationSlice,
} from "./organizationSlice";
import createScheduleSlide, { ScheduleSlice } from "./scheduleSlice";
import createProfileSlice, { ProfileSlice } from "./profileSlice";

type Logger = <
    T,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = []
>(
    f: StateCreator<T, Mps, Mcs>,
    name?: string
) => StateCreator<T, Mps, Mcs>;

type LoggerImpl = <T>(
    //@ts-ignore
    f: PopArgument<StateCreator<T, [], []>>,
    name?: string
    //@ts-ignore
) => PopArgument<StateCreator<T, [], []>>;

const loggerImpl: LoggerImpl =
    (f, name) =>
    (set: (arg0: any) => void, get: any, store: { setState: any }) => {
        type T = ReturnType<typeof f>;

        const loggedSet: typeof set = (...a: any[]) => {
            /**@ts-ignore */
            set(...a);
            // console.log(...(name ? [`${name}:`] : []), get());
        };
        store.setState = loggedSet;

        return f(loggedSet, get, store);
    };

export const logger = loggerImpl as unknown as Logger;

type State = AppSlice &
    AuthSlice &
    FeedbackSlice &
    InformationGuideSlice &
    OrganizationSlice &
    ScheduleSlice &
    ProfileSlice;

export const useStore = create<State>()(
    logger(
        devtools(
            /** @ts-ignore */
            function (...a) {
                return {
                    ...createAppStore(...a),
                    ...createAuthStore(...a),
                    ...createFeedbackSlide(...a),
                    ...createInformationGuideSlide(...a),
                    ...createOrganizationSlide(...a),
                    ...createScheduleSlide(...a),
                    ...createProfileSlice(...a),
                };
            }
        )
    )
);
