import React, { useState } from 'react';
import '../styles/components/dragcursor.scss';

function DragCursor({ styles }) {
    const [showArrows, setShowArrows] = useState(false);

    window.addEventListener('mousedown', () => {
        setShowArrows(true);
    });
    window.addEventListener('mouseup', () => {
        setShowArrows(false);
    });

    return (
        <div className='cursor-container' style={styles}>
            <span className={`left ${showArrows ? 'show' : ''}`}></span>
            <span className={`circle ${showArrows ? 'scale-down' : ''}`}>
                {!showArrows ? 'drag' : ''}
            </span>
            <span className={`right ${showArrows ? 'show' : ''}`}></span>
        </div>
    );
}

export default DragCursor;
