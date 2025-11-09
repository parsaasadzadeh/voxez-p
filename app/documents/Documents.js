
"use client"
import { useState } from "react";


const Documents = () => {
  const [activeSection, setActiveSection] = useState("install");

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <main className="relative z-10">
      <header className="py-12 px-6 text-center">
        <h1 className="text-orange-500 text-5xl font-bold mb-4">voxez</h1>
        <h2 className="text-3xl font-bold text-white mb-4">مستندات</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          راهنمای کامل استفاده از Voxez - از نصب تا پیاده‌سازی
        </p>
      </header>
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-effect rounded-2xl p-6 sidebar">
            <h3 className="text-white text-lg font-bold mb-4">فهرست مطالب</h3>
            <nav>
              <div
                className={`nav-item ${activeSection === "install" ? "active" : ""}`}
                onClick={() => showSection("install")}
              >
                <span>نصب و راه‌اندازی</span>
              </div>
              <div
                className={`nav-item ${activeSection === "icons" ? "active" : ""}`}
                onClick={() => showSection("icons")}
              >
                <span>ایکون‌ها</span>
              </div>

            </nav>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-8">
          {activeSection === "install" && (
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">نصب و راه‌اندازی</h2>
              <div className="p-4 max-w-full">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">استفاده از طریق cdn</h3>
                <div className="overflow-x-auto">
                  <code className="text-green-400 whitespace-pre-wrap break-words">
                    https://cdn.jsdelivr.net/gh/parsaasadzadeh/voxez@master/style.css
                  </code>
                </div>
              </div>

            </div>
          )}

          {activeSection === "icons" && (
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">مجموعه ایکون‌ها</h2>
            </div>
          )}


        </div>
      </div>
    </main>
  );
};

export default Documents;
