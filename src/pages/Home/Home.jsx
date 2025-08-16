import React, { useState } from 'react';
import './Home.css';
import Header from '../../component/Header/Header';
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay';
import Footer from '../../component/Footer/Footer';
import AppDownload from '../../component/AppDownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
            <AppDownload/>
            <Footer/>
        </div>
    );
};

export default Home;