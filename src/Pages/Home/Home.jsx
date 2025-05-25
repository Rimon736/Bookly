import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const loadData = useLoaderData();
    // console.log(loadData)

    return (
        <div>
            <Banner></Banner>
            <Books loadData={loadData}></Books>
        </div>
    );
};

export default Home;