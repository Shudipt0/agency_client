"use client";

import "./globals.css";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import Testmonial from "./_components/Testmonial";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { ContextImageProvider } from "@/context/ImageContext";
import { useEffect, useState } from "react";
import SidebarModal from "./_components/SidebarModal";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobilemenu, setMobileMenu] = useState(false);
  const pathName = usePathname();

  // Disable modal when scroll attempts
  useEffect(() => {
    const handleScrollAttempt = (e: Event) => {
      e.preventDefault();
      // Close modal on scroll
      setMobileMenu(false);
    };
    // Detect user scroll (mouse or touch)
    if (mobilemenu) {
      window.addEventListener("wheel", handleScrollAttempt, { passive: false });
      window.addEventListener("touchmove", handleScrollAttempt, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
    };
  }, [mobilemenu]);
  return (
    //clerk provider
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
      {/* Context provider for image handling */}
      <ContextImageProvider>
       
        <html lang="en" suppressHydrationWarning>
          <body cz-shortcut-listen="true" className="container mx-auto">
            <ThemeProvider attribute="class" enableSystem defaultTheme="system">
              {pathName.includes("/admin") ||
              pathName === "/sign-in" ||
              pathName === "/sign-up" ? (
                <> {children}</>
              ) : (
                <>
                  <Navbar mobileMenu={mobilemenu} setMobileMenu={setMobileMenu} />
                  <div>{children}</div>
                <Footer />
                <SidebarModal
                  mobilemenu={mobilemenu}
                  setMobileMenu={setMobileMenu}
                />
              </>
            )}
             </ThemeProvider>
          </body>
        </html>
       
      </ContextImageProvider>
    </ClerkProvider>
  );
}
