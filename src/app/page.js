import Cta from "@/components/sections/Cta";
import Hero from "@/components/sections/Hero";
import IconBrowser from "@/components/sections/IconBrowser";
import Install from "@/components/ui/Install";
import StatsBar from "@/components/ui/StatsBar";

export default function Home(){
  return(
    <>
    <Hero />
    <StatsBar />
    <IconBrowser />
    <Install/>
    <Cta />
    </>
  )
}