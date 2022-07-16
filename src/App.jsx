import Home from './pages/Home';
import './styles/App.scss';
import { useEffect, useState } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Loader from './components/Loader';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [showArrows, setShowArrows] = useState(false);

    // useEffect(() => {
    //     const app = document.querySelector('.App');

    //     new locomotiveScroll({
    //         el: app,
    //         smooth: true,
    //         lerp: 0.3,
    //     });
    // }, []);

    useEffect(() => {
        const el = document.querySelector('.culture');
        const app = document.querySelector('.App');
        const tl = gsap.timeline();

        tl.to('.App', {
            scrollTrigger: {
                trigger: '.culture',
                toggleClass: {
                    targets: ['.App', '.culture'],
                    className: 'dark-theme',
                },
                start: 'top center',
                end: '50%',
            },
        });
    }, []);

    const [isLoading, setIsLoading] = useState(true);

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
                    />
                </div>
            )}
        </>
    );
}

export default App;
