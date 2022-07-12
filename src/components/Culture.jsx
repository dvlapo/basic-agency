import React, { useState } from 'react';
import cultureLoop from '../assets/Culture-Loop_v1.mp4';
import '../styles/components/culture.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

function Culture() {
    const cultureRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = cultureRef.current;
        const text = textRef.current;
        const tl = gsap.timeline();

        tl.to(el, {
            scrollTrigger: {
                trigger: el,
                // scroller: el,
                toggleClass: {
                    targets: el,
                    className: 'inView',
                },
                start: 'top center',
                end: '+=500',
            },
        }).to(text, {
            scrollTrigger: {
                trigger: text,
                // pin: true,
                start: 'bottom bottom',
                end: '+=150',
            },
        });
    }, []);

    return (
        <section ref={cultureRef} className='culture'>
            <div ref={textRef} className='culture__text'>
                <p>
                    BASIC/DEPT® helps brands{' '}
                    <span className='connect'>
                        <span className='dot'>●</span>
                        <span>connect</span>
                    </span>{' '}
                    w/ culture
                </p>{' '}
                <span className='spotlight'>
                    Adweek <strong>(Agency Spotlight)</strong>
                </span>
                <a href='/' class='button-pill-pink'>
                    <span></span> About Us
                </a>
            </div>

            <div className='culture__videocontainer'>
                <video loop autoPlay src={cultureLoop}></video>
            </div>
        </section>
    );
}

export default Culture;
