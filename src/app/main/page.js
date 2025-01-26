"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head"; // Для подключения шрифтов Google Fonts

const Main = () => (
    <div className="flex flex-col min-h-screen">
        <Head>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                rel="stylesheet"
            />
        </Head>
        <Header
            title="Новосибирский авиационно-технический колледж"
            onLogout={() => (window.location.href = "/auth")}
        />
        <main className="flex-grow p-6 bg-blue-50 font-roboto">
            <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 bg-gray-100 flex justify-center items-center p-4">
                        <img
                            src="/logo.webp"
                            alt="Логотип Новосибирского авиационно-технического колледжа"
                            className="w-32 h-32 object-contain"
                        />
                    </div>
                    <div className="w-full lg:w-2/3 p-6">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">О колледже</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Новосибирский авиационно-технический колледж — один из ведущих учебных заведений региона,
                            готовящий специалистов для авиационной и технической промышленности. Здесь студенты получают
                            качественное образование, опирающееся на современные технологии и многолетний опыт.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mt-8 max-w-4xl mx-auto">
                <h2 className="text-xl font-bold text-blue-700 mb-4">Фотография здания</h2>
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                    <img
                        src="/photo.jpg"
                        alt="Фотография здания Новосибирского авиационно-технического колледжа"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className="mt-8 max-w-4xl mx-auto">
                <h2 className="text-xl font-bold text-blue-700 mb-4">О режиме и графике работы</h2>
                <p className="text-gray-700 leading-relaxed">
                    Время начала и окончания работы, перерыва для отдыха и питания для руководителя, заместителей руководителя,
                    главного бухгалтера, руководителей структурных подразделений, работников из числа учебно-вспомогательного
                    персонала, специалистов и рабочих устанавливается следующим образом:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Понедельник - пятница: начало работы - 9.00 часов, окончание работы - 17.30 часов, перерыв на обед - 11.30 до 12.00 часов.</li>
                    <li>Суббота, воскресенье - выходной.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Время начала и окончания работы, перерывы для отдыха и питания работникам, осуществляющим учебно-вспомогательные
                    функции (учебная часть, библиотека, учебно-производственные мастерские, информационно-техническая служба),
                    устанавливается следующим образом:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Понедельник - пятница: начало работы - 8.00 часов, перерыв на обед - 11.20 до 11.50 часов, окончание работы – 16.30 часов.</li>
                    <li>Суббота, воскресенье - выходной.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Время начала и окончания работы педагогических работников, перерывы для отдыха и питания устанавливаются в соответствии с
                    расписанием учебных занятий, планом и графиком мероприятий, расписанием звонков учебных занятий.
                </p>

                <h2 className="text-xl font-bold text-blue-700 mt-8 mb-4">Обращения и предложения</h2>
                <p className="text-gray-700 leading-relaxed">
                    Подать обращение или предложение, а также получить информацию о ходе их рассмотрения, можно воспользовавшись следующими каналами:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>по телефону: (383) 304-84-26;</li>
                    <li>по электронной почте: <a href="mailto:naviatk@edu54.ru" className="text-blue-500 underline">naviatk@edu54.ru</a>;</li>
                </ul>
            </section>
        </main>
        <Footer />
    </div>
);

export default Main;
