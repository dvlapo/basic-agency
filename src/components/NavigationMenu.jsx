import { useEffect, useState } from 'react';
import '../styles/components/navigationmenu.scss';
import DragCursor from './DragCursor';

function Initiative({ initiative }) {
    return (
        <li>
            <div className='top'>
                <div className='card'>
                    <div className='img-wrapper'>
                        <img src={initiative.imgSrc} alt='' />
                    </div>

                    <div className='text-content'>
                        <section>
                            <div>
                                <h2>{initiative.heading}</h2>
                                <p>{initiative.category}</p>
                            </div>
                            <div className='copy'>&copy;{initiative.year}</div>
                        </section>

                        <p>{initiative.details}</p>

                        <a href='/'>{initiative.linkText}</a>
                    </div>
                </div>
            </div>

            <span>0{initiative.idx}</span>
        </li>
    );
}

function NavigationMenu({
    initiatives,
    setIsNavOpen,
    showArrows,
    setShowArrows,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const [grabbed, setGrabbed] = useState(false);
    const [hangCursor, setHangCursor] = useState(false);
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();
    const [cursorStlyes, setCursorStyles] = useState({
        top: '50%',
        right: '5%',
        transform: 'translateY(-50%)',
    });

    function getMousePosition(e) {
        setCursorX(e.clientX);
        setCursorY(e.clientY);

        let sliderOuter = document.querySelector('.initiatives');

        const cursor = document.querySelector('.cursor-container');
        const slider = document.querySelector('.initiatives');

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

    function grabAndScroll(e) {
        let sliderOuter = document.querySelector('.initiatives');
        if (grabbed != true) {
            return;
        } else {
            sliderOuter.scrollLeft -= e.movementX;
            console.log(sliderOuter.scrollLeft);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 300);
    }, []);

    return (
        <div className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
            <div className='mask'></div>
            <div className='menu-header'>
                <a href='/'>
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

                <div className='internal-works'>
                    <span className='dot'></span>
                    <div>
                        <span>(6)internal works</span>
                        <span>&copy;2022 c/o basic/dept®</span>
                    </div>

                    <div>
                        <span>
                            a collection of internal projects and initiatives
                            under the
                        </span>
                        <span>basic® brand</span>
                    </div>
                </div>

                <button
                    role='button'
                    aria-label='Close overlay'
                    onClick={() => setIsNavOpen(false)}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 11.7 11.7'
                    >
                        <path d='M0,10.6L10.6,0l1.1,1.1L1.1,11.7L0,10.6z'></path>
                        <path d='M10.6,11.7L0,1.1L1.1,0l10.6,10.6L10.6,11.7z'></path>
                    </svg>
                </button>
            </div>

            <nav role='navigation'>
                <ul>
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
                    <li className='initiative'>
                        <button>initiative </button>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 14.1 8.5'
                        >
                            <path d='M14.1,1.4L7.1,8.5L5.7,7.1L12.7,0L14.1,1.4z'></path>
                            <path d='M1.4,0l7.1,7.1L7.1,8.5L0,1.4L1.4,0z'></path>
                        </svg>
                    </li>
                </ul>
            </nav>

            <ul
                className='initiatives'
                onMouseMove={(e) => {
                    getMousePosition(e);
                    grabAndScroll(e);
                }}
                onMouseLeave={() => {
                    setCursorStyles({
                        top: '50%',
                        right: '5%',
                        transform: 'translateY(-50%)',
                    });
                }}
                onMouseDown={(e) => {
                    setGrabbed(true);
                    setShowArrows(true);
                }}
                onMouseUp={(e) => {
                    setGrabbed(false);
                    setShowArrows(false);
                }}
            >
                <DragCursor
                    styles={cursorStlyes}
                    showArrows={showArrows}
                    setShowArrows={setShowArrows}
                />
                {initiatives.map((initiative) => {
                    return <Initiative initiative={initiative} />;
                })}
            </ul>

            <div className='menu-copyright'>
                <span>BASIC/DEPT®, inc</span> <span>10 - 22©</span>
            </div>
        </div>
    );
}

export default NavigationMenu;
