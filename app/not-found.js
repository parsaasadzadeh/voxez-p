
export const metadata = {
    title: "voxex-NotFound",
};
const NotFound = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
            <h1 className="text-6xl font-extrabold mb-4 animate-pulse text-purple-500">
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-2">صفحه پیدا نشد 😢</h2>
            <p className="text-gray-400 mb-8">
                به نظر می‌رسد آدرس وارد شده اشتباه است یا صفحه حذف شده است.
            </p>

            <a
                href="/"
                className="bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-2xl text-white font-medium shadow-lg hover:shadow-purple-500/50"
            >
                بازگشت به صفحه اصلی
            </a>
        </main>
    );
}


export default NotFound;;