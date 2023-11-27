import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <div
        style={{
            fontSize: '15px',
            backgroundColor: '#d0f0c0',
            border: '1px solid green',
            padding: '10px', // Optional: Add padding for better appearance
        }}
    >
        Green is the prime color of the world
    </div>
);

ReactDOM.render(element, document.getElementById('root'));
