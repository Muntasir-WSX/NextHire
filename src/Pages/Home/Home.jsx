import React from 'react';
import Banner from './Banner';
import SearchCategory from './SearchCategory';
import BrowuseCategoryHome from './BrowuseCategoryHome';
import HiringRouts from './HiringRouts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SearchCategory></SearchCategory>
            <BrowuseCategoryHome></BrowuseCategoryHome>
            <HiringRouts></HiringRouts>
        </div>
    );
};

export default Home;