"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
const navigationItems = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Stores",
  href: "/stores"
}, {
  name: "Products",
  href: "/products"
}];
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    theme,
    setTheme
  } = useTheme();
  return <motion.nav className=" fixed top-0 w-full z-50 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/images/2.png" alt="NextBunny Logo" width={32} height={32} />
              <span className="text-xl font-bold text-foreground">
                Scoop Cream
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationItems.map(item => <Link key={item.name} href={item.href} className="text-foreground">
                  {item.name}
                </Link>)}
              {/* <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mr-2">
                {theme === "dark" ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg> : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                  </svg>}
              </Button> */}
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
                <Link href="/projects">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="h-12 w-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="md:hidden shadow-lg bg-background/95 absolute left-0 right-0">
            <div className="flex flex-col space-y-4 pb-4 px-4">
              {navigationItems.map(item => <Link key={item.name} href={item.href} className="text-foreground py-2" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>)}
              <Button variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="justify-start">
                <span className="flex items-center">
                  {theme === "dark" ? <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg> : <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>}
                  Toggle Theme
                </span>
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground w-full">
                <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact us
                </Link>
              </Button>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
}