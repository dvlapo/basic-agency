import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Culture from '../components/Culture';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import News from '../components/News';
import SeeTheWork from '../components/SeeTheWork';

function Home({ showArrows, setShowArrows, isNavOpen, setIsNavOpen }) {
    return (
        <>
            {isNavOpen ? (
                <NavigationMenu setIsNavOpen={setIsNavOpen} />
            ) : (
                <>
                    <Header setIsNavOpen={setIsNavOpen} />
                    <main>
                        <SeeTheWork />
                        <Featured
                            showArrows={showArrows}
                            setShowArrows={setShowArrows}
                        />
                        <Culture />
                        <News />
                    </main>

                    {/* <Footer /> */}
                </>
            )}
        </>
    );
}

export default Home;
