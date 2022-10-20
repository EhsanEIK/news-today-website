import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const News = () => {
    const news = useLoaderData();
    return (
        <div>
            <h1>News</h1>
            <NewsSummaryCard
                key={news._id}
                news={news}></NewsSummaryCard>
        </div>
    );
};

export default News;