import Home from './pages/Home';
import './styles/App.scss';
import { useEffect, useState } from 'react';
import locomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const [showArrows, setShowArrows] = useState(false);

    // useEffect(() => {
    //     const app = document.querySelector('.App');

    //     new locomotiveScroll({
    //         el: app,
    //         smooth: true,
    //         lerp: 0.07,
    //     });
    // }, []);

    // useEffect(() => {
    //     const el = document.querySelector('.culture');
    //     const app = document.querySelector('.App');
    //     const tl = gsap.timeline();

    //     tl.to(app, {
    //         scrollTrigger: {
    //             trigger: el,
    //             toggleClass: {
    //                 targets: app,
    //                 className: 'dark-theme',
    //             },
    //             start: 'top center',
    //             end: '+=500',
    //         },
    //     });
    // }, []);

    return (
        <div className='App'>
            <Home showArrows={showArrows} setShowArrows={setShowArrows} />
        </div>
    );
}

export default App;
