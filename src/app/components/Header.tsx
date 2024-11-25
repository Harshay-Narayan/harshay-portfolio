"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsList } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";
import NavigationSmallScreen from "./NavigationSmallScreen";
import NavigationLargeScreen from "./NavigationLargeScreen";

const headerVariant = {
  start: {
    y: -100,
  },
  end: {
    y: 0,
  },
};

const hamburgerButtonVariant = {
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { delay: 1.5 },
  },
  hidden: {
    scaleY: 0,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export default function Header() {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleShowNavigation = () => {
    setShowNavigation(!showNavigation);
    console.log("Clicked");
  };

  return (
    <header className="flex w-full justify-center relative z-[999]">
      <motion.nav
        className="fixed sm:top-6 w-full h-[4.5rem] flex justify-between items-center backdrop-blur-sm bg-white/80 dark:bg-gray-950 dark:text-white sm:h-[3.8rem] sm:w-[55rem] shadow-lg sm:rounded-2xl"
        variants={headerVariant}
        initial="start"
        animate="end"
      >
        <div>
          <div className="sm:p-5 px-5">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          </div>
        </div>

        <NavigationSmallScreen
          showNavigation={showNavigation}
          handleShowNavigation={handleShowNavigation}
        />
        <NavigationLargeScreen />

        <div className="sm:px-0 px-5">
          <ThemeSwitch />
          <motion.button
            className="sm:hidden dark:text-white origin-top"
            onClick={handleShowNavigation}
            variants={hamburgerButtonVariant}
            initial="visible"
            animate={showNavigation ? "hidden" : "visible"}
          >
            <BsList />
          </motion.button>
        </div>
      </motion.nav>
    </header>
  );
}
