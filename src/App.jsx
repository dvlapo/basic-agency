import Home from './pages/Home';
import './styles/App.scss';
import { useState } from 'react';

function App() {
    const [showArrows, setShowArrows] = useState(false);

    return (
        <div className='App'>
            <Home showArrows={showArrows} setShowArrows={setShowArrows} />
        </div>
    );
}

export default App;
