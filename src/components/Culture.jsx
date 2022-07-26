import cultureLoop from '../assets/Culture-Loop_v1.mp4';
import '../styles/components/culture.scss';
import { useRef } from 'react';

function Culture() {
    const textRef = useRef(null);

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
                <video loop autoPlay muted src={cultureLoop}></video>
            </div>
        </section>
    );
}

export default Culture;
