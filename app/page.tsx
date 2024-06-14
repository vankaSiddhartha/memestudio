import Image from "next/image";
import NavBar from "./components/nav-bar";
import HeroSection from "./components/hero-section";
import CTA from "./components/cta";
import Team from "./components/team";
import { Footer } from "./components/footer";
import {Testimonials} from "./components/testimonials"
import CTAR from "./components/ctaR";
import CTRD from "./components/ctrd"

export default function Home() {
  return (
    <main className="w-full h-full">
    <div className=" h-full w-full bg-slate-950">
      <div className="  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      
   
     <div className="p-3">
              <NavBar/>
            
      </div>
        <div className="flex justify-center items-center mt-10">
                               <HeroSection/>

              </div>

      {/* web view for video */}
     <div  className="hidden md:flex justify-center items-center">
              <iframe height=  '700' className=" rounded-lg	 w-3/4" src="https://www.youtube.com/embed/IfJTn7_oSkg?si=gdM-CLf8oMeTm5ye" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>

     </div>
     {/*mobile view for video */}
         <div  className="md:hidden flex justify-center items-center">
              <iframe  className=" rounded-lg	h-96 w-3/4" src="https://www.youtube.com/embed/IfJTn7_oSkg?si=gdM-CLf8oMeTm5ye" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

     </div>
     <CTA/>
     <CTAR/>
     <CTRD/>
     < Testimonials/>
     <Team/>
     <Footer/>
      </div>
      
      </div>
    </main>
  );
}
