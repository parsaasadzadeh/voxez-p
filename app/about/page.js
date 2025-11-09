
export const metadata = {
  title: "about voxez",
  description: "about voxez Library",
};

const About = () => {
  return (
    <main className="relative z-10">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-orange-500 text-6xl font-bold mb-6">voxez</h1>
          <h2 id="pageTitle" className="text-4xl font-bold text-white mb-6">
            درباره Voxez
          </h2>
          <p
            id="companyDescription"
            className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            کتابخانه ایکون
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 rounded-full p-3 ml-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">ماموریت ما</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                ارائه آیکون‌های پیشرفته برای افزایش سرعت توسعه و زیبایی طراحی وب‌سایت‌ها
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 rounded-full p-3 ml-4">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">چشم‌انداز ما</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                تبدیل شدن به برترین کتابخانه های ایکون در سراسر جهان
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
