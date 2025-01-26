"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Новый импорт

const AuthForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login === 'Admin' && password === 'pswrd') {
            router.push('/main');
        } else {
            alert('Неверный логин или пароль');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 p-6 bg-white shadow-lg rounded-2xl w-80 font-roboto">

            <h1 className="text-2xl font-bold text-gray-800">Авторизация</h1>
            <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
            />
            <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform"
            >
                Войти
            </button>
        </form>
    );
};

export default AuthForm;
