export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-3xl font-bold text-white">
                Добро пожаловать в Систему Колледжа
            </h1>
            <p className="mt-4 text-lg text-gray-300">
                Перейдите на{" "}
                <a href="/auth" className="text-blue-400 underline">
                    страницу авторизации
                </a>.
            </p>
        </div>
    );
}
