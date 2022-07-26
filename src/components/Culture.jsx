import cultureLoop from '../assets/Culture-Loop_v1.mp4';
import '../styles/components/culture.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Culture() {
    const cultureRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const el = cultureRef.current;
        const main = document.querySelector('main');
        // console.log(el, main);

        const tl = gsap.timeline();

        tl.to(el, {
            scrollTrigger: {
                trigger: el,
                toggleClass: {
                    targets: [main, el],
                    className: 'dark-theme',
                },
                start: 'top center',
                end: '50%',
                lazy: false,
            },
        });
    }, []);

    return (
        <section className='culture' ref={cultureRef}>
            <div className='culture__text'>
                <p>
                    BASIC/DEPT® helps brands
                    <span className='connect'>
                        <span className='dot'>●</span>
                        <span>connect</span>
                    </span>{' '}
                    w/ culture
                </p>{' '}
                <span className='spotlight'>
                    Adweek <strong>(Agency Spotlight)</strong>
                </span>
                <a href='/' className='button-pill-pink'>
                    <span></span> About Us
                </a>
            </div>

            <div className='culture__videocontainer'>
                <video loop autoPlay muted src={cultureLoop}></video>
            </div>
        </section>
    );
}

export default Culture;
