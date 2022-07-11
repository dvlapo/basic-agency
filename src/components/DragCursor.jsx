import React, { useEffect, useState } from 'react';
import '../styles/components/dragcursor.scss';
import gsap from 'gsap';

function DragCursor({ styles, showArrows }) {
    const tl = gsap.timeline();

    useEffect(() => {
        tl.fromTo('.text', { y: 10 }, { y: 0, duration: 0.6 });
    }, [showArrows]);

    return (
        <div className='cursor-container' style={styles}>
            <span className={`left ${showArrows ? 'show' : ''}`}></span>
            <span className={`circle ${showArrows ? 'scale-down' : ''}`}>
                <span className='text-container'>
                    <span className='text'>{!showArrows ? 'drag' : ''}</span>
                </span>
            </span>
            <span className={`right ${showArrows ? 'show' : ''}`}></span>
        </div>
    );
}

export default DragCursor;
