import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Culture from '../components/Culture';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import News from '../components/News';
import SeeTheWork from '../components/SeeTheWork';

function Home({ showArrows, setShowArrows }) {
    return (
        <>
            <Header />
            <SeeTheWork />
            <Featured showArrows={showArrows} setShowArrows={setShowArrows} />
            <Culture />
            <News />
            <Footer />
        </>
    );
}

export default Home;
