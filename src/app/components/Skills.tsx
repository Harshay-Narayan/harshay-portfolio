"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

function Skills() {
  const { ref } = useSectionInView("Skills");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section ref={ref} id="skills" className="scroll-mt-28 mb-28">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-[42rem]">
        {skillsData.map((item, index) => (
          <motion.li
            className="bg-white shadow-md flex flex-col items-center text-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={item.skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image
              src={`https://skillicons.dev/icons?i=${item.slug}&theme=light`}
              alt={item.skill}
              width={50}
              height={50}
            />
            <p className="text-xs pt-2">{item.skill}</p>
          </motion.li>
        ))}
        <motion.li
          className="bg-white shadow-md flex flex-col items-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={skillsData.length}
        >
          {/* {item.skill}
            <item.ReactIcon /> */}
          <Image
            src={"/skillsImages/testing-library-icon.svg"}
            alt="testing library"
            width={50}
            height={50}
          />
          <p className="text-xs text-center pt-2">Testing Library</p>
        </motion.li>
      </ul>
    </section>
  );
}

export default Skills;
