import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle('Home');

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