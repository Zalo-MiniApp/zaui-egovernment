/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Article,
    Articles,
    Feedback,
    Feedbacks,
    FeedbackType,
    InformationGuide,
    InformationGuides,
    Organization,
    Profile,
    ScheduleAppointment,
    ScheduleAppointmentStatus,
} from "@dts/index";
import db from "@mock/db.json";
import Thumbnail from "@assets/thumb.png";
import FeedbackThumbnail from "@assets/feedback-thumb.png";
import { useStore as store } from "@store";

export interface GetOrganizationParams {
    miniAppId: string;
}

export const getOrganization = async (
    params: GetOrganizationParams,
): Promise<Organization> => {
    const org: Organization = {
        ...db.organization,
        officialAccounts: db.organization.officialAccounts.map(oa => ({
            oaId: oa.id,
            name: oa.name,
            follow: false,
        })),
    };

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(org);
        }, 200);
    });
};

export interface GetArticlesParams {
    organizationId: string;
    page?: number;
    limit?: number;
}
export interface GetArticlesResponse {
    current: number;
    data: (Omit<Article, "createdAt"> & { createdAt: number })[];
    pageSize: number;
    total: number;
}

export const getArticles = async (
    params: GetArticlesParams,
): Promise<Articles> => {
    const articles: Articles = {
        articles: db.articles.map(item => ({
            ...item,
            createdAt: new Date(item.createdAt),
            thumb: Thumbnail,
        })),
        total: 10,
        currentPageSize: 10,
        page: 0,
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(articles);
        }, 500);
    });
};

export interface GetFeedbacksParams {
    organizationId: string;
    page?: number;
    limit?: number;
    firstFetch?: boolean;
}
export interface GetFeedbacksResponse {
    current: number;
    data: (Omit<Feedback, "createdAt"> & { createdAt: number })[];
    pageSize: number;
    total: number;
}

export const getFeedbacks = async (
    params: GetFeedbacksParams,
): Promise<Feedbacks> => {
    const feedbacks: Feedbacks = {
        ...db.feedbacks,
        total: db.feedbacks.current,
        currentPageSize: db.feedbacks.pageSize,
        page: db.feedbacks.current,
        feedbacks: db.feedbacks.data.map(item => ({
            ...item,
            creationTime: new Date(item.creationTime),
            responseTime: new Date(item.responseTime),
            id: Number(item.id),
            imageUrls: [FeedbackThumbnail],
        })),
    };

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(feedbacks);
        }, 300);
    });
};

export interface GetFeedbackTypeParams {
    organizationId: string;
}

export const getFeedbackTypes = async (
    params: GetFeedbackTypeParams,
): Promise<FeedbackType[]> =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(
                db.feedbackTypes.map((item, index) => ({
                    id: Number(item.id),
                    title: item.title,
                    order: index + 1,
                })),
            );
        }, 500);
    });

export interface CreateFeedbackParams {
    organizationId?: string;
    title: string;
    content: string;
    imageUrls?: string[];
    feedbackTypeId: number;
    token: string;
}

export const createFeedback = async (
    feedback: CreateFeedbackParams,
    organizationId: string,
): Promise<boolean> =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    });

export interface GetInformationGuidesParams {
    organizationId: string;
    page?: number;
    limit?: number;
}
export interface GetInformationGuidesResponse {
    current: number;
    data: InformationGuide[];
    pageSize: number;
    total: number;
}

export const getInformationGuides = async (
    params: GetInformationGuidesParams,
): Promise<InformationGuides> =>
    Promise.resolve({
        ...db.guidelines,
        informationGuides: db.guidelines.data.map(item => ({
            ...item,
            id: Number(item.id),
        })),
    });

export interface GetWorkScheduleParams {
    organizationId: string;
}
export interface GetWorkScheduleResponse {
    fullName: string;
    yourNumber: number;
    currentNumber: number;
    date: string;
    content: string;
    phoneNumber: string;
    status: ScheduleAppointmentStatus;
    rejectedInfo?: string;
}

export const getWorkSchedule = async (
    params: GetWorkScheduleParams,
): Promise<ScheduleAppointment | null> =>
    new Promise(resolve => {
        setTimeout(() => {
            if (!store.getState().schedule) {
                return resolve(null);
            }
            return resolve({
                number: 53,
                currentNumber: 11,
                date: new Date(),
                fullName: "User Name",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                status: "approved",
                phoneNumber: "0122402390",
            });
        }, 500);
    });

export interface CreateWorkScheduleParams {
    organizationId: string;
    date: Date;
    fullName: string;
    content: string;
    phoneNumber: string;
}
export interface CreateWorkScheduleResponse {
    fullName: string;
    yourNumber: number;
    currentNumber: number;
    date: string;
    content: string;
    phoneNumber: string;
    organizationId: string;
    status: ScheduleAppointmentStatus;
}

export const createWorkSchedule = async (
    params: CreateWorkScheduleParams,
): Promise<ScheduleAppointment | null> => {
    try {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    number: 53,
                    currentNumber: 11,
                    date: new Date(),
                    fullName: "User Name",
                    content:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                    status: "pending",
                    phoneNumber: "0122402390",
                });
            }, 500);
        });
    } catch (err) {
        throw err;
    }
};

export interface SearchProfileParams {
    profileCode: string;
    organizationId: string;
}

export type SearchProfilesResponse = Profile[];

export const searchProfiles = async (
    params: SearchProfileParams,
): Promise<Profile[] | undefined> =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(
                db.profiles.map(item => ({
                    ...item,
                    dueDate: new Date(item.dueDate),
                    notifications: item.notifications.map(noti => ({
                        ...noti,
                        createdAt: new Date(noti.createdAt),
                    })),
                })),
            );
        }, 500);
    });
