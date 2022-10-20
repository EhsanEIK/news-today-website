import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../News/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h1>Total News: {allNews.length}</h1>
            {
                allNews.map(n => <NewsSummaryCard
                    key={n._id}
                    news={n}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;