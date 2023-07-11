import InformationGuideList from "@components/information-guide/InformationGuideList";
import PageLayout from "@components/layout/PageLayout";
import { TOTAL_INFORMATION_GUIDE_PER_PAGE } from "@constants/common";
import { useStore } from "@store";
import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import tw from "twin.macro";
import "styled-components/macro";

const InformationGuidePage: React.FC = () => {
    const listRef = useRef<HTMLDivElement>(null);

    const { id: orgId } = useStore(state => state.organization) || {
        id: "",
    };

    const [informationGuides, getInformationGuides, loading] = useStore(
        state => [
            state.informationGuides,
            state.getInformationGuides,
            state.gettingInformationGuide,
        ],
    );

    const {
        informationGuides: data = [],
        total = 0,
        page = 0,
    } = informationGuides || {};

    let hasMore = false;
    if (data.length < total) {
        hasMore = true;
    }

    useEffect(() => {
        if (orgId && !informationGuides) {
            getInformationGuides({
                organizationId: orgId,
                page: 0,
                limit: TOTAL_INFORMATION_GUIDE_PER_PAGE,
            });
        }
    }, [orgId]);

    const handleLoadMore = () => {
        if (!orgId) {
            return;
        }
        getInformationGuides({
            organizationId: orgId,
            page: page + 1,
            limit: TOTAL_INFORMATION_GUIDE_PER_PAGE,
        });
    };

    return (
        <PageLayout
            tw="bg-white"
            title="Thông tin - hướng dẫn"
            id="informationGuides"
        >
            <InfiniteScroll
                dataLength={data.length}
                next={handleLoadMore}
                hasMore={hasMore}
                loader={null}
                scrollableTarget="informationGuides"
            >
                <InformationGuideList
                    data={data}
                    ref={listRef}
                    loading={loading}
                />
            </InfiniteScroll>
        </PageLayout>
    );
};

export default InformationGuidePage;
