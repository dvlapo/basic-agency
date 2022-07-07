import '../styles/components/featured.scss';
import DragCursor from './DragCursor';
import googleLogo from '../assets/google-dark.svg';
import kfcLogo from '../assets/KFC-Logo.svg';
import wilsonLogo from '../assets/Wilson-Logo.svg';
import attLogo from '../assets/ATT-Logo.svg';
import patagoniaLogo from '../assets/patagonia-dark.svg';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from 'react';

function Featured() {
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
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [cursorStlyes, setCursorStyles] = useState({
        top: '50%',
        right: '5%',
    });
    const [scrollbarOffset, setScrollbarOffset] = useState(0);

    // const containerRef = useRef(null);

    // useEffect(() => {
    //     if (containerRef) {
    //         new LocomotiveScroll({
    //             el: containerRef.current,
    //             smooth: true,
    //             direction: 'horizontal',
    //             multiplier: 0.2,
    //             lerp: 0.6,
    //         });
    //     }
    // }, []);

    // fns
    function grabAndScroll(e) {
        if (grabbed === true) {
            let sliderOuter = document.querySelector('.slider-outer');
            sliderOuter.scrollLeft -= e.movementX;
            setScrollbarOffset(sliderOuter.scrollLeft);
        } else {
            return;
        }
    }

    function scrollOnly() {
        let sliderOuter = document.querySelector('.slider-outer');
        sliderOuter.scrollLeft -= e.movementX;
        setScrollbarOffset(sliderOuter.scrollLeft);
    }

    function getMousePosition(e) {
        let sliderOuter = document.querySelector('.slider-outer');
        let sliderTop = sliderOuter.getBoundingClientRect().top;
        let sliderLeft = sliderOuter.getBoundingClientRect().left;

        // fix this
        setCursorX(e.pageX - sliderLeft * 2);
        setCursorY(e.pageY - sliderTop * 2.8);

        setCursorStyles({
            top: cursorY + 'px',
            left: cursorX + 'px',
        });
    }

    return (
        <section>
            <h2>featured engagements</h2>

            <div
                className='slider-outer'
                onMouseMove={getMousePosition}
                onScroll={scrollOnly}
                onMouseLeave={() =>
                    setCursorStyles({
                        top: '50%',
                        right: '5%',
                    })
                }
                onMouseDown={(e) => setGrabbed(true)}
                onMouseUp={(e) => setGrabbed(false)}
            >
                <div className='slider' onMouseMove={grabAndScroll}>
                    <DragCursor styles={cursorStlyes} />

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
