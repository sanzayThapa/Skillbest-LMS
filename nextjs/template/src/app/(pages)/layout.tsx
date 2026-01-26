"use client";

import ReduxProvider from "@/components/ReduxProvider";
import Footer from "@/core/common/footer/footer";
import Header from "@/core/common/header/header";
import AOS from "aos";
import "aos/dist/aos.css"
import { usePathname } from "next/navigation";
import { useEffect } from "react";


export default function PagesLayout({ children }: { children: React.ReactNode }) {
  const location = usePathname();
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration in ms
          once: true,     // animate only once
        });
      }, []);
  return (
    <div className="main-wrapper">
      
<ReduxProvider>
  <Header />
  {children}
  {location === '/home' || location === '/home-3' || location === '/home-4' 
        || location === '/home-5' || location === '/home-6' ? <></>:<Footer/>}
</ReduxProvider>
    </div>
  );
}
