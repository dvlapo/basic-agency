import React from 'react';
import Culture from '../components/Culture';
import Featured from '../components/Featured';
import Header from '../components/Header';
import SeeTheWork from '../components/SeeTheWork';

function Home({ showArrows, setShowArrows }) {
    return (
        <>
            {/* <Header /> */}
            <SeeTheWork />
            <Featured showArrows={showArrows} setShowArrows={setShowArrows} />
            <Culture />
        </>
    );
}

export default Home;
