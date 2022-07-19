import Home from './pages/Home';
import './styles/App.scss';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Loader from './components/Loader';

function App() {
    const [showArrows, setShowArrows] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollSmoother);

    //     ScrollSmoother.create({
    //         smooth: 1,
    //         effects: true,
    //         smoothTouch: 0.1,
    //     });
    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = document.querySelector('.culture');
        const app = document.querySelector('.App');
        const tl = gsap.timeline();

        if (document.querySelector('.culture')) {
            gsap.set(['.culture'], {
                visibility: 'visible',
            });

            tl.to('.culture', {
                scrollTrigger: {
                    trigger: '.culture',
                    toggleClass: {
                        targets: ['.culture', app],
                        className: 'dark-theme',
                    },
                    start: 'top center',
                    end: '50%',
                },
            });
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4500);
    }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='App'>
                    <Home
                        showArrows={showArrows}
                        setShowArrows={setShowArrows}
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                    />
                </div>
            )}
        </>
    );
}

export default App;
