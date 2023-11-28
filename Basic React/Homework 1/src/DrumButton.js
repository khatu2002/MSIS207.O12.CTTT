// DrumButton.js

import React from 'react';

const DrumButton = ({ drumKey, image, sound, onClick }) => {
    return (
        <button className={`drum ${drumKey}`} onClick={() => onClick(drumKey)}>
            <img src={image} alt={`${drumKey} drum`} />
            <audio id={`drumSound-${drumKey}`}>
                <source src={sound} type="audio/mpeg" />
            </audio>
        </button>
    );
};

export default DrumButton;
