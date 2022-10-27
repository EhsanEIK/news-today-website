import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle('News Category');

    return (
        <div>
            <h2 className='mb-4'>This category has total {categoryNews.length} news</h2>
            {categoryNews.map(cn => <NewsSummaryCard
                key={cn._id}
                news={cn}></NewsSummaryCard>)}
        </div>
    );
};

export default Category;