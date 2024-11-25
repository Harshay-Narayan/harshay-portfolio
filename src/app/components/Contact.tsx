"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import SubmitButton from "./SubmitButton";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const sendEmailAction = async (formData: FormData) => {
    const { data, error } = await sendEmail(formData);
    if (error) {
      toast.error("Something went wrong!");
      return;
    }
    console.log(data);
    formRef.current?.reset();
    toast.success("Thanks for contacting! I will connect with you shortly");
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Let&apos;s Connect </SectionHeading>
      <p></p>
      <form
        action={sendEmailAction}
        ref={formRef}
        className="flex flex-col mt-10 dark:text-black"
      >
        <input
          type="text"
          name="senderName"
          required
          maxLength={250}
          placeholder="Your Name"
          className="h-14 px-4 rounded-xl border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={250}
          placeholder="Your Email"
          className="h-14 px-4 my-3 rounded-xl border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <input
          type="text"
          name="subject"
          required
          maxLength={250}
          placeholder="Subject"
          className="h-14 px-4 rounded-xl border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="h-52 my-3 rounded-xl border p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;
