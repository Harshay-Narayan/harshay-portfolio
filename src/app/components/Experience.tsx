"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

type IndividualExperienceProps = (typeof experiencesData)[number];

function IndividualExperience({
  title,
  location,
  date,
  description,
  image,
  company,
}: IndividualExperienceProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="relative border-l max-w-[48rem] flex ml-7"
    >
      <div className="flex justify-center overflow-hidden items-center absolute left-0 top-0 -translate-x-1/2 bg-white border border-gray-400 rounded-full w-14 h-14">
        <Image
          className=""
          src={image}
          alt="logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="p-10 pt-3"
      >
        <div className="text-sm">{date}</div>
        <div className="text-lg sm:text-md font-bold">
          {title} | {location}
        </div>
        <div className="text-sm">{company}</div>
        <div className="pt-3 text-justify text-sm">
          <ul className="list-disc">
            {description
              .split(".")
              .filter(Boolean)
              .map((line, index) => (
                <li key={index}>{line}</li>
              ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Experience() {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 overflow-x-hidden"
    >
      <SectionHeading>My Experience</SectionHeading>
      {experiencesData.map((item) => {
        return (
          <React.Fragment key={item.title}>
            <IndividualExperience {...item} />
          </React.Fragment>
        );
      })}
    </section>
  );
}

export default Experience;
