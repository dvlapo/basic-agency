import React, { useEffect, useState } from 'react';
import '../styles/components/header.scss';
import reelLoop from '../assets/reel-loop.mp4';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function Header({ setIsNavOpen }) {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [vH, setVH] = useState();
    const [navHeight, setNavHeight] = useState();
    const [cursorStyles, setCursorStyles] = useState({
        left: '50%',
        top: '50%',
    });
    const [scrollingUp, setScrollingUp] = useState(false);

    gsap.registerPlugin(ScrollTrigger);

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY - 50);

        if (e.pageY < navHeight || e.pageY > vH) {
            setCursorStyles({
                left: '50%',
                top: '50%',
            });
        } else {
            setCursorStyles(styles);
        }
    });

    useEffect(() => {
        const browserHeight = window.innerHeight;
        setVH(browserHeight);

        setNavHeight(browserHeight * 0.2);

        ScrollTrigger.observe({
            target: window,
            type: 'wheel,touch,scroll',
            onUp: () => {
                // console.log(window.scrollY);
                if (window.scrollY < vH) {
                    setScrollingUp(false);
                } else if (window.scrollY > vH) {
                    setScrollingUp(true);
                }
            },
            onDown: () => {
                if (window.scrollY > vH) {
                    setScrollingUp(false);
                }
            },
        });
    }, [scrollingUp]);

    const styles = {
        left: cursorX + 'px',
        top: cursorY + 'px',
    };

    return (
        <header className='header'>
            <nav className={scrollingUp ? 'scrollUp' : 'scrollDown'}>
                <a href='/' className='logo'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 208.3 27.7'
                    >
                        <path d='M0,24.1h11.7c5.5,0,8.7-2.3,8.7-6.8c0-2.8-1.7-4.5-4.1-5.3c2-0.9,3.4-2.6,3.4-5.3c0-3.5-2.2-5.9-7.5-5.9H0V24.1z M13.1,7.9 c0,1.6-1,2.4-3.2,2.4H6.4V5.5h3.5C12.1,5.5,13.1,6.3,13.1,7.9z M13.8,16.9c0,1.7-1,2.4-3.3,2.4H6.4v-4.9h4.2 C12.8,14.4,13.8,15.2,13.8,16.9z'></path>
                        <path d='M38.2,24.1h6.7L36.8,0.7h-8.4l-8.1,23.4h6.5l1.2-3.8h9.1L38.2,24.1z M32.5,5.9l2.9,9.5h-5.9L32.5,5.9z'></path>
                        <path d='M55.1,24.5c6.3,0,10.3-3,10.3-7.7c0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-0.4-2.6-1-2.6-2.1S52.4,5,54.5,5c2.4,0,4.1,1,4.2,3.1H65 c0-5.6-4.7-7.8-10.5-7.8c-5.6,0-9.7,2.8-9.7,7.3c0,3.8,2.5,5.8,6.5,6.6l5.1,1c2,0.4,2.6,1,2.6,2.1c0,1.5-1.4,2.3-3.7,2.3 c-2.6,0-4.5-1.3-4.6-3.8h-6.3C44.6,21.3,48.1,24.5,55.1,24.5z'></path>
                        <path d='M67.3,24.1h6.4V0.7h-6.4V24.1z'></path>
                        <path d='M82,12.4c0-3.9,2.1-6.8,5.6-6.8c2.9,0,4.7,1.7,5.1,3.7h6.7c-0.6-6.1-5.8-9.1-11.7-9.1C80,0.2,75.4,5,75.4,12.3 s4.5,12.1,12.3,12.1c6,0,11.2-2.9,11.8-9.1h-6.7c-0.4,2.1-2.1,3.7-5.1,3.7C84.1,19.2,82,16.3,82,12.4z'></path>
                        <path d='M113.7,0h-5.2l-10,27.7h5.2L113.7,0z'></path>
                        <path d='M137.8,12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8C134.2,24.1,137.8,19,137.8,12.4z M131.2,12.4c0,4.6-2.6,6.3-6.2,6.3 h-3.3V6.1h3.3C128.6,6.1,131.2,7.8,131.2,12.4z'></path>
                        <path d='M139.5,24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V0.7h-18.2V24.1z'></path>
                        <path d='M180,8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8C176.2,17,180,14.8,180,8.9z M173.4,8.9c0,2.3-1.1,3.2-3.7,3.2h-3.1 V5.6h3.1C172.3,5.6,173.4,6.6,173.4,8.9z'></path>
                        <path d='M181,6.2h7.4v17.9h6.4V6.2h7.4V0.7H181V6.2z'></path>
                        <path d='M203.5,23.7c-2.6,0-4.8-2.1-4.8-4.8c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8C208.3,21.5,206.1,23.7,203.5,23.7z M203.5,14.9 c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S205.7,14.9,203.5,14.9z'></path>
                        <path d='M204,17.2h-1.4v1.6h1.4c0.5,0,0.7-0.3,0.7-0.8C204.7,17.5,204.4,17.2,204,17.2z M203.9,16.4c1.2,0,1.8,0.5,1.8,1.6 c0,0.6-0.3,1.1-0.9,1.3l1.2,1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7H203.9z'></path>
                    </svg>
                </a>

                <nav className='desktop-nav'>
                    <ul className='flex-row'>
                        <li>
                            <a href='/'>work</a>
                        </li>
                        <li>
                            <a href='/'>about</a>
                        </li>
                        <li>
                            <a href='/'>news</a>
                        </li>
                        <li>
                            <a href='/'>thinking</a>
                        </li>
                        <li>
                            <a href='/'>pledge</a>
                        </li>
                        <li>
                            <a href='/'>careers</a>
                        </li>
                        <li>
                            <a href='/'>contact</a>
                        </li>
                    </ul>
                </nav>

                <div
                    className='three-dots'
                    role='button'
                    onClick={() => setIsNavOpen(true)}
                    aria-label='Open menu'
                >
                    <svg
                        width='6'
                        height='6'
                        viewBox='0 0 10 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle cx='5' cy='5' r='5' fill='white' />
                    </svg>
                    <svg
                        width='6'
                        height='6'
                        viewBox='0 0 10 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle cx='5' cy='5' r='5' fill='white' />
                    </svg>
                    <svg
                        width='6'
                        height='6'
                        viewBox='0 0 10 10'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle cx='5' cy='5' r='5' fill='white' />
                    </svg>
                </div>

                <span
                    role='button'
                    className='menu-btn'
                    aria-label='Open menu'
                    onClick={() => setIsNavOpen(true)}
                >
                    menu
                </span>
            </nav>

            <video className='header-video' autoPlay muted loop src={reelLoop}>
                <source type='video/mp4' />
            </video>

            <div
                className='playreal-container'
                // style={{ marginTop: `${navHeight}px` }}
            >
                <PlayReelBtn cursorStyles={cursorStyles} />
            </div>
        </header>
    );
}

function PlayReelBtn({ cursorStyles }) {
    const tl = gsap.timeline();

    useEffect(() => {
        tl.fromTo(
            '.play',
            { y: 20, opacity: 0 },
            { y: 0, duration: 1, opacity: 1 }
        ).fromTo(
            '.reel',
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                delay: -1,
                duration: 1,
            }
        );
    }, []);

    return (
        <div role='button' className='playreel-cursor' style={cursorStyles}>
            <div className='top'>
                <div>
                    <span className='play'>play</span>
                </div>

                <div>
                    <span className='reel'>reel</span>
                </div>
            </div>
            <div className='bottom'>
                <p style={{ marginBottom: '5px' }}>
                    basic/dept <span>®</span>
                </p>
                <p>2010-22</p>
            </div>
        </div>
    );
}

export default Header;
