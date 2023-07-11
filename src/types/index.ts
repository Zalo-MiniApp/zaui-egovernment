import { FC } from "react";

export type ResData<T> = {
    data?: T;
    err: number;
    message: string;
};

export type Address = {
    district: string;
    city: string;
};

export type User = {
    id: string;
    name: string;
    avatar: string;
    idByOA?: string;
};

export type OA = {
    oaId: string;
    follow: boolean;
    name: string;
    logoUrl?: string;
};

// eslint-disable-next-line no-shadow
export enum Status {
    INCOMPLETE,
    COMPLETED,
    OVERDUE,
}

export type ProfileNotification = {
    message: string;
    createdAt?: Date;
};

export type Profile = {
    name?: string;
    dueDate?: Date;
    profileCode?: string;
    notifications?: ProfileNotification[];
};

export type Organization = {
    officialAccounts?: OA[];
    id?: string;
    logoUrl?: string;
    description: string;
    name?: string;
};

export type Article = {
    author?: string;
    title?: string;
    desc?: string;
    link?: string;
    createdAt?: Date;
    thumb?: string;
    id?: string;
};

export type Articles = {
    total: number;
    articles: Article[];
    page: number;
    currentPageSize: number;
};

export type AppError = {
    message?: string;
    code?: number;
};

export type Feedback = {
    id: number;
    title: string;
    content: string;
    response: string;
    creationTime: Date;
    responseTime: Date;
    type: string;
    imageUrls?: string[];
};

export type InformationGuide = {
    id: number;
    question: string;
    answer: string;
};

export type FeedbackType = {
    id: number;
    title: string;
    order: number;
};

export type Feedbacks = {
    total: number;
    feedbacks: Feedback[];
    page: number;
    currentPageSize: number;
};

export type InformationGuides = {
    total: number;
    informationGuides: InformationGuide[];
    page: number;
    currentPageSize: number;
};

export type ScheduleAppointment = {
    fullName: string;
    number?: number;
    currentNumber?: number;
    date: Date;
    content: string;
    phoneNumber: string;
    status: ScheduleAppointmentStatus;
    rejectedInfo?: string;
};

export type ScheduleAppointmentStatus = "pending" | "rejected" | "approved";

export type Utinity = {
    key: string;
    label: string;
    icon?: FC<any>;
    iconSrc?: string;
    path?: string;
    link?: string;
    inDevelopment?: boolean;
    phoneNumber?: string;
};
