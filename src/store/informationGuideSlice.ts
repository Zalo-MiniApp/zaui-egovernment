import { InformationGuides } from "@dts";
import {
    getInformationGuides,
    GetInformationGuidesParams,
} from "@service/services.mock";
import { StateCreator } from "zustand";

export interface InformationGuideSlice {
    gettingInformationGuide?: boolean;
    informationGuides?: InformationGuides;
    getInformationGuides: (params: GetInformationGuidesParams) => Promise<void>;
}

const informationGuideSlice: StateCreator<InformationGuideSlice> = set => ({
    gettingInformationGuide: true,

    getInformationGuides: async (params: GetInformationGuidesParams) => {
        try {
            set(state => ({
                ...state,
                gettingInformationGuide: true,
            }));
            const informationGuides = await getInformationGuides(params);
            set(state => ({
                ...state,

                gettingInformationGuide: false,

                informationGuides: {
                    ...informationGuides,
                    informationGuides: [
                        ...(state.informationGuides?.informationGuides || []),
                        ...informationGuides.informationGuides,
                    ],
                    currentPageSize: informationGuides.currentPageSize,
                    page: informationGuides.page,
                },
            }));
        } catch (err) {
            set(state => ({
                ...state,
                gettingInformationGuide: false,
            }));
        }
    },
});

export default informationGuideSlice;
