import React from 'react';
import '../styles/components/seethework.scss';
import thumbnailPatagonia from '../assets/thumbnail-patagonia.jpg';
import thumbnailWilson from '../assets/thumbnail-wilson.jpg';
import thumbnailGooglestore from '../assets/thumbnail-google-store.mp4';

function SeeTheWork() {
    return (
        <section className='container'>
            <div className='heading-container'>
                <article>
                    <h1>
                        BASIC/DEPT® is a global branding and digital design
                        agency building products, services, and eCommerce
                        experiences that turn cultural values into company
                        value.
                    </h1>

                    <a href='/' className='button-pill'>
                        <span></span> see the work
                    </a>
                </article>

                <figure>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 307 100'
                    >
                        <path d='M0,86.8h41.9c19.6,0,31.3-8.3,31.3-24.5c0-10.2-6-16.2-15.1-19.2c7.2-3.4,12.1-9.4,12.1-19.2c0-12.5-7.9-21.5-27.2-21.5H0 V86.8z M47.2,28.3c0,5.7-3.8,8.7-11.7,8.7H23V19.6h12.5C43.8,19.6,47.2,22.6,47.2,28.3z M49.8,60.8c0,6-3.8,8.7-12.1,8.7H22.6V51.7 h15.1C46,52.1,49.8,54.7,49.8,60.8z M128.3,0h-18.9L73.6,100h18.5L128.3,0z M216.6,44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5 C203.4,86.8,216.6,68.3,216.6,44.5z M192.5,44.5c0,16.6-9.4,22.6-22.3,22.6h-12.1V21.9h12.1C183,21.9,192.5,27.9,192.5,44.5z'></path>
                        <path d='M224.2,46.4c0,22.6,18.5,41.1,41.1,41.1c22.6,0,41.1-18.5,41.1-41.1S287.9,5.3,265.3,5.3C242.6,5.3,224.2,23.8,224.2,46.4z M232.1,46.4c0-18.9,14.7-34,33.2-34c18.5,0,33.2,15.1,33.2,34s-15.1,34-33.2,34C246.8,80,232.1,64.9,232.1,46.4z M246,66.8h12.8 v-14h7.5l7.5,14h14l-9.4-16.6c4.2-1.9,7.5-6.8,7.5-12.1c0-9.4-6-14-16.6-14h-23.8v42.6H246z M272.8,38.1c0,3.4-2.3,4.9-6.4,4.9h-7.9 V34h7.9C270.9,34.3,272.8,35.1,272.8,38.1z'></path>
                    </svg>
                </figure>
            </div>

            <div className='thumbnails'>
                <a href='/'>
                    <div className='asset-container'>
                        <img
                            src={thumbnailPatagonia}
                            alt='thumbnail patagonia'
                        />
                    </div>
                    <section>
                        <h2>patagonia</h2>
                        <p>
                            an ecommerce experience driven by patagonia's brand
                            mission
                        </p>
                    </section>
                </a>
                <a href='/'>
                    <div className='asset-container'>
                        <img src={thumbnailWilson} alt='thumbnail wilson' />
                    </div>

                    <section>
                        <h2>wilson</h2>
                        <p>
                            a century-old sports brand finding its place in
                            culture
                        </p>
                    </section>
                </a>
                <a href='/'>
                    <div className='asset-container'>
                        <video
                            autoPlay
                            loop
                            muted
                            src={thumbnailGooglestore}
                        ></video>
                    </div>
                    <section>
                        <h2>google store</h2>
                        <p>
                            an ecommerce experience driven by patagonia's brand
                            mission
                        </p>
                    </section>
                </a>
            </div>

            <div className='date-decor'>
                <div className='line'></div>
                <div className='grid'>
                    <span>01</span>
                    <span>/05</span>
                    <span className='dot'></span>
                </div>
            </div>
        </section>
    );
}

export default SeeTheWork;
