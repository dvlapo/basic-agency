import React from 'react';
import '../styles/components/news.scss';
import newsImage1 from '../assets/news-image-1.png';
import newsImage2 from '../assets/news-image-2.png';
import newsImage3 from '../assets/news-image-3.jpg';
import newsImage4 from '../assets/news-image-4.png';
import newsImage5 from '../assets/news-image-5.png';
import newsImage6 from '../assets/news-image-6.jpg';
import newsImage7 from '../assets/news-image-7.png';

function News() {
    const listItems = [
        {
            imgSrc: newsImage1,
            heading: 'BASIC/DEPT® is Climate Neutral Certified',
            category: 'press',
            date: '05.19.22',
        },
        {
            imgSrc: newsImage2,
            heading:
                'DEPT® Takes Global Network of the Year at 26th Annual Webby Awards',
            category: 'awards',
            date: '04.27.22',
        },
        {
            imgSrc: newsImage3,
            heading: 'A Fresh Collab with Brixton Just in Time for Spring',
            category: 'work',
            date: '04.14.22',
        },
        {
            imgSrc: newsImage4,
            heading: 'BASIC® Earns 12 Nominations in 26th Annual Webby Awards',
            category: 'awards',
            date: '04.05.22',
        },
        {
            imgSrc: newsImage5,
            heading:
                'Patagonia Recognized for Environmental Impact at The Inaugural Anthem Awards',
            category: 'awards',
            date: '02.25.22',
        },
        {
            imgSrc: newsImage6,
            heading: 'Cowboy and BASIC® Recognized Across 8 Categories',
            category: 'awards',
            date: '12.07.21',
        },
        {
            imgSrc: newsImage7,
            heading: 'FAST CO.: BASIC® and KFC Team Up for a Digital Overhaul',
            category: 'press',
            date: '11.30.21',
        },
    ];

    return (
        <section className='news-section'>
            <header>
                <h1>
                    <span>featured</span>
                    <span> news</span>
                </h1>

                <a href='/' className='button-pill'>
                    <span></span> view all
                </a>
            </header>

            <ul>
                {listItems.map((listItem) => {
                    return (
                        <li key={listItem.imgSrc}>
                            <a href='/'>
                                <div className='list-img-container'>
                                    <img src={listItem.imgSrc} alt='' />
                                </div>

                                <div className='list-details'>
                                    <h2>{listItem.heading}</h2>

                                    <span>
                                        <b>{listItem.category}</b>{' '}
                                        {listItem.date}
                                    </span>
                                </div>

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
                            </a>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default News;
