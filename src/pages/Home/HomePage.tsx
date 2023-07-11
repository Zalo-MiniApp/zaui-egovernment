import React, { useEffect } from "react";
import {
    HomeHeader,
    UserInfo,
    Utinities,
    ListOA,
    NewsSection,
} from "@components";
import PageLayout from "@components/layout/PageLayout";
import { APP_UTINITIES } from "@constants/utinities";
import { useStore } from "@store";
import Contacts from "./Contacts";
import Procedures from "./Procedures";

const HomePage: React.FunctionComponent = () => {
    const getUser = useStore(state => state.getUserInfo);
    const [organization] = useStore(state => [
        state.organization,
        state.getOrganization,
    ]);
    const user = useStore(state => state.user);

    useEffect(() => {
        (async () => {
            // eslint-disable-next-line no-unused-expressions
            !user && (await getUser());
        })();
    }, []);

    return (
        <PageLayout
            id="home-page"
            customHeader={
                <HomeHeader
                    title="DỊCH VỤ CÔNG"
                    name={organization?.name || ""}
                />
            }
        >
            <UserInfo />
            <Utinities utinities={APP_UTINITIES} />
            <ListOA />
            <Contacts />
            <Procedures />
            <NewsSection />
        </PageLayout>
    );
};

export default HomePage;
