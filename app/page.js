"use client"
import Header from "./components/Header";
import CdnLinkBox from "./components/CdnLinkBox";
import IconGrid from "./components/IconGrid";
export default function Home() {

  return (
    <div className="bg-black min-h-screen animated-bg">
      <div className="flex flex-col items-center space-y-32 py-20 relative z-10">
        <Header />
        <CdnLinkBox />
        <IconGrid />
      </div>
    </div>
  );
}
