"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email-template/contact-form-email";

const resend = new Resend(String(process.env.RESEND_API_KEY));

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const senderName = formData.get("senderName");
  const subject = formData.get("subject");
  console.log(senderEmail, senderName, message, subject);

  //   simple server-side validation

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(senderName, 5000)) {
    return {
      error: "Invalid Name",
    };
  }
  if (!validateString(subject, 5000)) {
    return {
      error: "Invalid Subject",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Profile_Admin - [Inquiry] <onboarding@resend.dev>",
      to: "harshaynarayan123@gmail.com",
      subject: subject,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName,
        senderEmail: senderEmail,
        subject: subject,
        message: message,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
