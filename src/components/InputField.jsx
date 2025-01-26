"use client";

import React from 'react';

const InputField = ({ onChange, value, bgColor, textColor, placeholder, disabled, position, type }) => {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            className={`py-2 px-4 rounded-lg ${bgColor} ${textColor} ${position} hover:scale-105 transition-transform disabled:opacity-50`}
        />
    );
};

export default InputField;
