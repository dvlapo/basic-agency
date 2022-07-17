import React, { useState } from 'react';
import '../styles/components/footer.scss';

function Footer() {
    const [email, setEmail] = useState('Email Address');

    return (
        <footer>
            <div className='footer-top'>
                <section>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 307 100'
                        className='footer-logo'
                    >
                        <path d='M0,86.8h41.9c19.6,0,31.3-8.3,31.3-24.5c0-10.2-6-16.2-15.1-19.2c7.2-3.4,12.1-9.4,12.1-19.2c0-12.5-7.9-21.5-27.2-21.5H0 V86.8z M47.2,28.3c0,5.7-3.8,8.7-11.7,8.7H23V19.6h12.5C43.8,19.6,47.2,22.6,47.2,28.3z M49.8,60.8c0,6-3.8,8.7-12.1,8.7H22.6V51.7 h15.1C46,52.1,49.8,54.7,49.8,60.8z M128.3,0h-18.9L73.6,100h18.5L128.3,0z M216.6,44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5 C203.4,86.8,216.6,68.3,216.6,44.5z M192.5,44.5c0,16.6-9.4,22.6-22.3,22.6h-12.1V21.9h12.1C183,21.9,192.5,27.9,192.5,44.5z'></path>
                        <path d='M224.2,46.4c0,22.6,18.5,41.1,41.1,41.1c22.6,0,41.1-18.5,41.1-41.1S287.9,5.3,265.3,5.3C242.6,5.3,224.2,23.8,224.2,46.4z M232.1,46.4c0-18.9,14.7-34,33.2-34c18.5,0,33.2,15.1,33.2,34s-15.1,34-33.2,34C246.8,80,232.1,64.9,232.1,46.4z M246,66.8h12.8 v-14h7.5l7.5,14h14l-9.4-16.6c4.2-1.9,7.5-6.8,7.5-12.1c0-9.4-6-14-16.6-14h-23.8v42.6H246z M272.8,38.1c0,3.4-2.3,4.9-6.4,4.9h-7.9 V34h7.9C270.9,34.3,272.8,35.1,272.8,38.1z'></path>
                    </svg>

                    <p>
                        We collaborate with ambitious brands and people. Let's
                        build.{' '}
                        <a
                            href='mailto:biz@basicagency.com'
                            className='footer__contact-link'
                        >
                            biz@basicagency.com
                        </a>
                    </p>
                </section>

                <div>
                    <section className='links'>
                        <div>
                            <h6>stay in the know</h6>

                            <div className='input-field'>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                />
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 17 17'
                                >
                                    <rect
                                        x='0.1'
                                        y='7.5'
                                        width='14'
                                        height='2'
                                    ></rect>
                                    <path d='M8.4,0l8.5,8.5l-1.4,1.4L7,1.4L8.4,0z'></path>
                                    <path d='M7,15.6l8.5-8.5l1.4,1.4L8.4,17L7,15.6z'></path>
                                </svg>
                            </div>
                        </div>

                        <div className='connect-container'>
                            <div className='connect'>
                                <h6>social</h6>
                                <ul>
                                    <li>
                                        <a href='/'>Instagram</a>
                                    </li>
                                    <li>
                                        <a href='/'>Twitter</a>
                                    </li>
                                    <li>
                                        <a href='/'>LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href='/'>Facebook</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='connect'>
                                <h6>initiatives</h6>
                                <ul>
                                    <li>
                                        <a href='/'>Crafted</a>
                                    </li>
                                    <li>
                                        <a href='/'>Culture Manual</a>
                                    </li>
                                    <li>
                                        <a href='/'>Applied</a>
                                    </li>
                                    <li>
                                        <a href='/'>BandBeats</a>
                                    </li>
                                    <li>
                                        <a href='/'>Moves</a>
                                    </li>
                                    <li>
                                        <a href='/'>B®/Good</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='connect'>
                                <h6>offices</h6>
                                <ul>
                                    <li>
                                        <a href='/'>San Diego — CA</a>
                                    </li>
                                    <li>
                                        <a href='/'>New York — NY</a>
                                    </li>
                                    <li>
                                        <a href='/'>Bay Area — CA</a>
                                    </li>
                                    <li>
                                        <a href='/'>St. Louis — MO</a>
                                    </li>
                                    <li>
                                        <a href='/'>Amsterdam — NL</a>
                                    </li>
                                    <li>
                                        <a href='/'>London — EN</a>
                                    </li>
                                    <li>
                                        <a href='/'>Berlin — GE</a>
                                    </li>
                                    <li>
                                        <a href='/'>Argentina — AR</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='footer-copyright'>
                <span>BASIC/DEPT®, inc 10 - 22©</span>
                <span>Easy to understand, impossible to ignore.™</span>
                <span>
                    <a href='/'>Terms</a>, <a href='/'>Privacy Policy</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
