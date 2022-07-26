import Home from './pages/Home';
import './styles/App.scss';
import { useEffect, useState } from 'react';

import Loader from './components/Loader';
import initiativeImg01 from './assets/initiative-1.png';
import initiativeImg02 from './assets/initiative-2.png';
import initiativeImg03 from './assets/initiative-3.png';
import initiativeImg04 from './assets/initiative-4.png';
import initiativeImg05 from './assets/initiative-5.png';

function App() {
    const [showArrows, setShowArrows] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [initiatives, setInitiatives] = useState([
        {
            idx: 1,
            imgSrc: initiativeImg01,
            heading: 'culture manual',
            category: 'agency culture & onboarding',
            year: 2018,
            details:
                'To help strengthen our culture and attract world class talent, we created the Culture Manual – an online guide for new hires that differentiates the employee onboarding process and builds alignment for our collective future.',
            linkText: 'Visit the Site',
        },
        {
            idx: 2,
            imgSrc: initiativeImg02,
            heading: 'moves',
            category: 'our new hq',
            year: 2019,
            details:
                'When we moved into our new HQ, we put together a site experience providing an in-depth look into the two-year process imagining, designing, and developing our new office we call home.',
            linkText: 'Visit the Site',
        },
        {
            idx: 3,
            imgSrc: initiativeImg03,
            heading: 'crafted',
            category: 'creative community',
            year: 2019,
            details:
                'A communal initiative we operate to celebrate diversity and creativity by bringing together people from different backgrounds and interests.',
            linkText: 'Visit the Site',
        },
        {
            idx: 4,
            imgSrc: initiativeImg04,
            heading: 'brandbeats',
            category: 'podcast series',
            year: 2017,
            details:
                'Our podcast series garnering 45,000+ listens per episode providing candid conversations around various industry related topics.',
            linkText: 'Explore Brandbeats',
        },
        {
            idx: 5,
            imgSrc: initiativeImg05,
            heading: 'applied',
            category: 'thoughts & perspectives',
            year: 2020,
            details:
                'Our panel series and thought-leadership platform where we share perspectives and tactics related to strategy, design, and technology.',
            linkText: 'Explore Applied',
        },
    ]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4500);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='App'>
                    <Home
                        showArrows={showArrows}
                        setShowArrows={setShowArrows}
                        isNavOpen={isNavOpen}
                        setIsNavOpen={setIsNavOpen}
                        initiatives={initiatives}
                    />
                </div>
            )}
        </>
    );
}

export default App;
