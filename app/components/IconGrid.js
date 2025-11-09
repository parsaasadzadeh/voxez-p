
import Link from "next/link";
const IconGrid = () => {
    return (
        <>
            <div className="flex flex-col items-center space-y-6">
                <div className="grid grid-cols-5 gap-4 max-w-lg">

                    <div className="bg-gray-900 border border-orange-500 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                        <i className="voxez-yelp--24663 text-orange-500 text-2xl"></i>
                    </div>

                    <div className="bg-gray-900 border border-orange-500 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                        <i className="voxez-yoast--24664 text-orange-500 text-2xl"></i>
                    </div>

                    <div className="bg-gray-900 border border-orange-500 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                        <i className="voxez-youtube--24665 text-orange-500 text-2xl"></i>
                    </div>
                    <div className="bg-gray-900 border border-orange-500 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                        <i className="voxez-px--24206 text-orange-500 text-2xl"></i>
                    </div>
                    <div className="bg-gray-900 border border-orange-500 rounded-lg p-3 hover:bg-gray-800 transition-colors duration-200 cursor-pointer flex items-center justify-center">
                        <i className="voxez-accessible-icon--24207 text-orange-500 text-2xl"></i>
                    </div>
                </div>

                <Link href="/documents" className="bg-transparent border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold">
                    دیدن همه ایکون‌ها
                </Link>
            </div>

        </>
    )
}

export default IconGrid;