import React, { useEffect, useState } from 'react';
import '../styles/components/header.scss';
import reelLoop from '../assets/reel-loop.mp4';
import gsap from 'gsap';

function Header() {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [navHeight, setNavHeight] = useState();
    const [cursorStyles, setCursorStyles] = useState({
        left: 0,
        top: 0,
    });

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY - 50);

        if (e.pageY < navHeight) {
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
        setNavHeight(browserHeight * 0.2);
    }, []);

    const styles = {
        left: cursorX + 'px',
        top: cursorY + 'px',
    };

    return (
        <header className='header'>
            {/* <nav>
                <a href='/' className='logo'>
                    basic/dept
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

                <div className='three-dots'>
                    <ion-icon name='ellipsis-horizontal'></ion-icon>
                </div>

                <span role='button' className='menu-btn' aria-label='Open menu'>
                    menu
                </span>
            </nav>

            <video className="header-video" src={reelLoop}>
                <source type='video/mp4' />
            </video> */}

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
