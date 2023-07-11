import { TOTAL_FEEDBACKS_PER_PAGE } from "@constants/common";
import { useStore } from "@store";
import React, { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FeedbackList from "./FeedbackList";

const FeedbackSection: React.FC = () => {
    const listRef = useRef<HTMLDivElement>(null);

    const { id: orgId } = useStore(state => state.organization) || {
        id: "",
    };

    const [feedbacks, getFeedbacks, loading] = useStore(state => [
        state.feedbacks,
        state.getFeedbacks,
        state.gettingFeedback,
    ]);

    const { feedbacks: data = [], total = 0, page = 0 } = feedbacks || {};

    let hasMore = false;
    if (data.length < total) {
        hasMore = true;
    }

    useEffect(() => {
        if (orgId) {
            getFeedbacks({
                organizationId: orgId,
                page: 0,
                limit: TOTAL_FEEDBACKS_PER_PAGE,
                firstFetch: true,
            });
        }
    }, [orgId]);

    const handleLoadMore = () => {
        if (!orgId) {
            return;
        }
        getFeedbacks({
            organizationId: orgId,
            page: page + 1,
            limit: TOTAL_FEEDBACKS_PER_PAGE,
        });
    };

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={handleLoadMore}
            hasMore={hasMore}
            loader={null}
            scrollableTarget="feedbacks"
        >
            <FeedbackList data={data} ref={listRef} loading={loading} />
        </InfiniteScroll>
    );
};

export default FeedbackSection;
