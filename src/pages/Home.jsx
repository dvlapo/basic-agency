import React from 'react';
import Featured from '../components/Featured';
import Header from '../components/Header';
import SeeTheWork from '../components/SeeTheWork';

function Home({ showArrows, setShowArrows }) {
    return (
        <>
            {/* <Header /> */}
            <SeeTheWork />
            <Featured showArrows={showArrows} setShowArrows={setShowArrows} />
        </>
    );
}

export default Home;
