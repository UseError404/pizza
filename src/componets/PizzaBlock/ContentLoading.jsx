import React from 'react';
import ContentLoader from "react-content-loader"

function ContentLoading() {
    return (
        <ContentLoader
            speed={2}
            width={180}
            height={275}
            viewBox="0 0 200 275"
            backgroundColor="#a6a6a6"
            foregroundColor="#a08d8d"

        >
            <circle cx="86" cy="75" r="59" />
            <rect x="0" y="141" rx="10" ry="10" width="180" height="20" />
            <rect x="0" y="168" rx="10" ry="10" width="180" height="60" />
            <rect x="2" y="240" rx="10" ry="10" width="80" height="30" />
            <rect x="95" y="240" rx="10" ry="10" width="85" height="30" />
        </ContentLoader>
    );
}

export default ContentLoading;