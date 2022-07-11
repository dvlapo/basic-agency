import '../styles/components/featured.scss';
import DragCursor from './DragCursor';
import googleLogo from '../assets/google-dark.svg';
import kfcLogo from '../assets/KFC-Logo.svg';
import wilsonLogo from '../assets/Wilson-Logo.svg';
import attLogo from '../assets/ATT-Logo.svg';
import patagoniaLogo from '../assets/patagonia-dark.svg';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';

function Featured({ showArrows, setShowArrows }) {
    const featuredArr = [
        {
            img: googleLogo,
            heading: 'google',
            paragraph:
                'Our embedded partnership with Google is as deep as it gets. We’re the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions Learn more about our partnership',
        },
        {
            img: kfcLogo,
            heading: 'kfc',
            paragraph:
                'An award-winning global, digital transformation engagement spanning eCommerce, mobile app, and new drive thru experiences. Bringing KFC’s brand story to life while making it easier for customers to buy chicken. Learn more about our partnership ',
        },
        {
            img: wilsonLogo,
            heading: 'wilson',
            paragraph:
                'A reimagining of Wilson’s brand visual identity, and brand campaign, to support a new product drop and the launch of the first brick and mortar retail location in the brand’s 108-year history. Read our full case study ',
        },
        {
            img: attLogo,
            heading: 'at&t',
            paragraph:
                'Redesigning the digital flagship for the largest telecommunications company in the world. Creating frictionless paths to purchase for a wide range of consumers across a vast portfolio of products and services.',
        },
        {
            img: patagoniaLogo,
            heading: 'patagonia',
            paragraph:
                'Ongoing partnership providing strategy, branding, experience design, and development focused on bringing their mission and offerings to consumers through brand-led programs and platforms. Read our full case study ',
        },
    ];

    // states
    const [grabbed, setGrabbed] = useState(false);
    const [hangCursor, setHangCursor] = useState(false);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [cursorStlyes, setCursorStyles] = useState({
        top: '50%',
        right: '5%',
    });
    const [scrollbarOffset, setScrollbarOffset] = useState(0);

    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef) {
            new LocomotiveScroll({
                el: containerRef.current,
                smooth: true,
                direction: 'horizontal',
                // lerp: 0.02,
            });
        }
    }, []);

    // fns
    function grabAndScroll(e) {
        if (grabbed != true) {
            return;
        } else {
            let sliderOuter = document.querySelector('.slider-outer');
            sliderOuter.scrollLeft -= e.movementX;
            setScrollbarOffset(sliderOuter.scrollLeft * 1.5);
        }
    }

    function scrollOnly(e) {
        let sliderOuter = document.querySelector('.slider-outer');
        setScrollbarOffset(sliderOuter.scrollLeft);
    }

    function getMousePosition(e) {
        setCursorX(e.clientX);
        setCursorY(e.clientY);

        let sliderOuter = document.querySelector('.slider-outer');

        const cursor = document.querySelector('.cursor-container');
        const slider = document.querySelector('.slider-outer');

        const sliderRect = slider.getBoundingClientRect();

        // center cursor
        const cursorHalfWidth = cursor.getBoundingClientRect().width * 0.5;
        const cursorHalfHeight = cursor.getBoundingClientRect().height * 0.5;

        setCursorStyles({
            top: cursorY - sliderRect.top - cursorHalfHeight + 'px',
            left:
                cursorX -
                sliderRect.left +
                sliderOuter.scrollLeft -
                cursorHalfWidth +
                'px',
        });
    }

    return (
        <section className={`featured-section ${hangCursor ? 'hang' : ''}`}>
            <h2>featured engagements</h2>

            <div
                className={`slider-outer ${hangCursor ? 'hang' : ''}`}
                onMouseMove={getMousePosition}
                onScroll={(e) => scrollOnly()}
                onMouseLeave={() => {
                    setHangCursor(true);
                    setCursorStyles({
                        top: '50%',
                        right: '5%',
                        transform: 'translateY(-50%)',
                    });
                }}
                onMouseEnter={(e) => setHangCursor(false)}
                onMouseDown={(e) => {
                    setGrabbed(true);
                    setShowArrows(true);
                }}
                onMouseUp={(e) => {
                    setGrabbed(false);
                    setShowArrows(false);
                }}
                ref={containerRef}
            >
                <DragCursor
                    styles={cursorStlyes}
                    showArrows={showArrows}
                    setShowArrows={setShowArrows}
                />
                <div className='slider' onMouseMove={grabAndScroll}>
                    {featuredArr.map((details, idx) => {
                        return (
                            <article key={idx}>
                                <div className='img-container'>
                                    <img src={details.img} alt='' />
                                </div>
                                <h3>{details.heading}</h3>
                                <p>
                                    {details.paragraph} <a href='/'>here</a>.
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>

            <div className='scroll-bar-outer'>
                <div
                    className='scroll-bar-inner'
                    style={{ left: scrollbarOffset }}
                ></div>
            </div>
        </section>
    );
}

export default Featured;
