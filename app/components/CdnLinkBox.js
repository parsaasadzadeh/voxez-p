
import { useState } from "react";
const CdnLinkBox = () => {
    const [copied, setCopied] = useState(false);
    const cdnLink = "https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(cdnLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };

  
    return (
        <>
            <div
                onClick={copyToClipboard}
                className="bg-gray-900 border-2 border-orange-500 rounded-lg p-4 cursor-pointer hover:bg-gray-800 transition-colors duration-200 max-w-md w-full"
            >
                <div className="flex items-center justify-between">
                    <span className="text-white font-mono text-sm break-all">{cdnLink}</span>
                    <svg
                        className="w-5 h-5 text-orange-500 ml-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 
                12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 
                00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                </div>
                <div
                    className={`text-green-400 text-xs mt-2 transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"
                        }`}
                >
                    کپی شد!
                </div>
            </div>
        </>
    )
}

export default CdnLinkBox;