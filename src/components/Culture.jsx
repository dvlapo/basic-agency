import React, { useState } from 'react';
import cultureLoop from '../assets/Culture-Loop_v1.mp4';
import '../styles/components/culture.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { useEffect } from 'react';

function Culture() {
    const textRef = useRef(null);

    // useEffect(() => {
    //     const text = textRef.current;
    //     const tl = gsap.timeline();

    //     tl.to(text, {
    //         scrollTrigger: {
    //             trigger: text,
    //             pin: true,
    //             pinSpacing: 'margin',
    //             start: 'top 80px',
    //             // end: 'bottom bottom',
    //         },
    //     });
    // }, []);

    return (
        <section className='culture'>
            <div ref={textRef} className='culture__text'>
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
                <video loop autoPlay src={cultureLoop}></video>
            </div>
        </section>
    );
}

export default Culture;
