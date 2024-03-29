import Culture from '../components/Culture';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationMenu from '../components/NavigationMenu';
import News from '../components/News';
import SeeTheWork from '../components/SeeTheWork';

function Home({
    initiatives,
    showArrows,
    setShowArrows,
    isNavOpen,
    setIsNavOpen,
}) {
    return (
        <>
            <NavigationMenu
                setIsNavOpen={setIsNavOpen}
                initiatives={initiatives}
                showArrows={showArrows}
                setShowArrows={setShowArrows}
                isNavOpen={isNavOpen}
            />
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

                <Footer />
            </>
        </>
    );
}

export default Home;
