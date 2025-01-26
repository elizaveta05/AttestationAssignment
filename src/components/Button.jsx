"use client";

import React from 'react';

const Button = ({ onClick, bgColor, textColor, text, disabled, position }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${position} hover:scale-105 transition-transform disabled:opacity-50`}
        >
            {text}
        </button>
    );
};

export default Button;