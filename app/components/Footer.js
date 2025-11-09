import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="w-full mt-32 py-8 border-t border-orange-500/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-orange-500 text-lg font-bold mb-4">Voxez</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                پلتفرم پیشرفته برای توسعه‌دهندگان و طراحان وب
              </p>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">لینک‌های سریع</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/documents" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    مستندات
                  </Link>
                </li>


                <li>
                  <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    درباره ما
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-md font-semibold mb-4">تماس با ما</h4>
              <p className="text-gray-400 text-sm">voxez1@gmail.com</p>
              <p className="text-gray-400 text-sm">09143834148</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-500 text-sm">© 2025 Voxez. تمامی حقوق محفوظ است.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;