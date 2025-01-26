"use client";

import React from 'react';

const Header = ({ title, onLogout }) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800  text-blue-100">
            <h1 className="text-xl font-bold">{title}</h1>
            <button onClick={onLogout} className="text-sm underline">
                Выйти
            </button>
        </header>
    );
};

export default Header;