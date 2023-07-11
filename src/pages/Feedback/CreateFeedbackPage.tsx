import PageLayout from "@components/layout/PageLayout";
import React, { useState } from "react";
import CreateFeedbackSuccess from "./CreateFeedbackSuccess";
import CreateFeedbackForm from "./CreateFeedbackForm";

export interface IUploadImageResponse {
    domain: string;
    images: string[];
}

export interface FormItemValidate {
    status: "default" | "error";
    errorText?: string;
}

export interface FormValidate {
    title: FormItemValidate;
    content: FormItemValidate;
}

const CreateFeedbackPage: React.FC = () => {
    const [feedbackSucess, setFeedbackSuccess] = useState<boolean>(false);

    return (
        <PageLayout title="Gửi phản ánh">
            {feedbackSucess ? (
                <CreateFeedbackSuccess />
            ) : (
                <CreateFeedbackForm
                    successCallback={result => {
                        setFeedbackSuccess(Boolean(result));
                    }}
                />
            )}
        </PageLayout>
    );
};

export default CreateFeedbackPage;
