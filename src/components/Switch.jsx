"use client";

import React, { useState } from 'react';

const Switch = ({ text, onChange, bgColor, textColor, position }) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        onChange(newState);
    };

    return (
        <div className={`flex items-center ${position}`}>
            <button
                onClick={handleToggle}
                className={`w-12 h-6 flex items-center ${bgColor} rounded-full p-1 transition-colors ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
            >
                <div
                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
                />
            </button>
            <span className={`ml-2 ${textColor}`}>{text}</span>
        </div>
    );
};

export default Switch;