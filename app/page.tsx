import Image from "next/image";
import BLogsSection from "../public/components/BlogsSection";
import Header from "../public/components/Header"
import FeaturesSection from "../public/components/FeaturesSection";
import Footer from "../public/components/Footer"
import HeroSection from "../public/components/HeroSection"
import IngredientsSection from "../public/components/IngredientsSection"

export default function Home() {
  return (
    <div className="text-center">
      <h1>main page</h1>
      <Header/>
      <HeroSection/>
      <BLogsSection/>
      <IngredientsSection/>
      <FeaturesSection/>
      <Footer/>
    </div>

    
  );
}
