"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import ThemeToggleButton from "./Theme-toggleButton";

const logo = {
  title: "GreenDev",
  url: "/",
};
const menu = [
  { title: "Home", url: "/" },
  {
    title: "Who are We?",
    url: "/about",
  },
  {
    title: "Our Services",
    url: "/services",
  },
  {
    title: "Our Projects",
    url: "/projects",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
];

interface NavbarProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ mobileMenu, setMobileMenu }: NavbarProps) => {
  // Get the current pathname to highlight the active menu item
  const pathName = usePathname();

  return (
    <section className="w-full">
      <div className="w-full px-6 md:px-28 py-4 fixed bg-white dark:bg-[#090909] z-50 shadow top-0 transition-all ease-in-out duration-300">
        {/* Desktop Menu */}
        <nav className=" hidden py-4 container mx-auto md:flex justify-between">
          {/* Logo */}
          <div>
            <Link
              href={logo.url}
              className="text-2xl font-bold tracking-tighter"
            >
              {logo.title}
            </Link>
          </div>
          <div className="flex items-center gap-3 ">
            {menu.map((nav) => (
              <Link
                key={nav.title}
                href={nav.url}
                className={`px-4 py-2 text-[16px] font-bold transition-colors hover:text-black ${
                  pathName === nav.url
                    ? "text-black dark:text-white "
                    : "text-[#0E0E2C]/60 dark:text-white/60 "
                }`}
              >
                {nav.title}
                <div
                  className={`{${
                    pathName === nav.url
                      ? "w-2 py-[2px] bg-blue-500 rounded-full transition-all ease-in-out duration-200 "
                      : ""
                  }}`}
                ></div>
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            {/* Theme Toggle Button */}
            <ThemeToggleButton />
            {/* sign in / sign up buttons */}
            <SignedOut>
              <button className="px-4 text-[14px] font-bold text-white bg-blue-500 rounded-md transition-colors hover:bg-blue-600">
                <Link href="/sign-in">Log In</Link>
              </button>
              <button className="px-4 text-[14px] font-bold text-white bg-gray-500 rounded-md transition-colors hover:bg-gray-600">
                <Link href="/sign-up">Sign Up</Link>
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href={logo.url} className="flex items-center gap-2">
              {logo.title}
            </Link>
            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle Button */}
              <ThemeToggleButton />
              {/* menu button */}
              <button onClick={() => setMobileMenu(!mobileMenu)} className="">
                {mobileMenu ? <FaTimes /> : <CgMenuRightAlt />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}

      <div
        className={` lg:hidden top-14 flex flex-col items-center justify-center gap-4 bg-white dark:bg-[#262A31] shadow-md fixed w-full z-50 overflow-hidden transition-all ease-in-out duration-300 ${
          mobileMenu ? " h-[400px]" : "h-0"
        } `}
      >
        {menu.map((nav) => (
          <Link
            key={nav.title}
            href={nav.url}
            className={`px-4 py-2 text-[16px] font-bold transition-colors hover:text-black ${
              pathName === nav.url
                ? "text-black dark:text-white "
                : "text-[#0E0E2C]/60 dark:text-white/60 "
            }`}
            onClick={() => setMobileMenu(false)}
          >
            {nav.title}
          </Link>
        ))}

        <div className="flex gap-2 mt-4 ">
          {/* sign in / sign up buttons */}
          <SignedOut>
            <button className="px-4 py-1 text-[14px] font-bold text-white bg-blue-500 rounded transition-colors hover:bg-blue-600">
              <Link href="/sign-in">Log In</Link>
            </button>
            <button className="px-4 py-1 text-[14px] font-bold text-white bg-gray-500 rounded transition-colors hover:bg-gray-600">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      {/* End Mobile Dropdown Menu */}
    </section>
  );
};

export { Navbar };
