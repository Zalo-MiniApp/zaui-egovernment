import PageLayout from "@components/layout/PageLayout";
import React, { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "zmp-ui";
import { useStore } from "@store";
import ProfileInfo from "./ProfileInfo";

const ProfilePage: FC = () => {
    const { profile, getProfile } = useStore();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const navigate = useNavigate();
    useEffect(() => {
        if (!id) {
            navigate("/", { animate: false, replace: true });
        } else {
            getProfile({ id });
        }
    }, [id]);

    return (
        <PageLayout bg="white" title="Chi tiết hồ sơ">
            {profile && <ProfileInfo profile={profile} />}
        </PageLayout>
    );
};

export default ProfilePage;
