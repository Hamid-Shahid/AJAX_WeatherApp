import React, { useState } from 'react';
function BackgroundToggle() {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const toggleBackgroundColor = () => {
        const newColor = backgroundColor === 'red' ? 'lightblue' : 'red';
        setBackgroundColor(newColor);
    };
    return (
        <div style={{ backgroundColor: backgroundColor, minHeight: '100vh'}}>
            <button onClick={toggleBackgroundColor}>Change Background Color</button>
        </div>
    );
}

export default BackgroundToggle;
