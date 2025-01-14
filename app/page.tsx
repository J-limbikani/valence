import Business from "./components/Business";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative w-full h-screen mx-auto p-2 pt-4 md:p-4 lg:p-8 text-white">
      
      <Hero />
      <Business/>
      <CTA/>
      <Footer/>
    </div>
  );
}
