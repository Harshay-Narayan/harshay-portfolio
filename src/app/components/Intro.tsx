"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import TypingTextComponent from "./typing-text-component";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-20 max-w-[48rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col sm:flex-row w-full">
        <motion.div
          className="order-2 sm:order-none mb-10 mt-4 px-4 sm:w-[75%] text-2xl font-medium !leading-[1.5] sm:text-xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <TypingTextComponent
            text="Hi, I'm Harshay."
            once={true}
            className="text-4xl font-extrabold"
          />
          <div className="mt-10 text-justify">
            I&apos;m a Frontend Developer passionate about crafting web applications
            that excel in both speed and design. I utilize the latest
            technologies and prioritize a user-centric approach to build
            scalable, responsive, and secure frontend for businesses.
          </div>
        </motion.div>
        <div className="order-1 sm:order-none w-fit">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src="/images/developer.png"
                alt="harshay-narayan"
                width={1200}
                height={1200}
                priority={true}
                className="w-[600px]"
              />
            </motion.div>
            {/* <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ stiffness: 125, delay: 0.1, duration: 0.7 }}
            >
              👋
            </motion.span> */}
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/harshay_narayan_resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
        >
          Download CV
          <HiDownload />
        </a>
        <div className="flex gap-2">
          <a
            href="https://linkedin.com"
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition rounded-full dark:bg-white/10 dark:text-white/60"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
