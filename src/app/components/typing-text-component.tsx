"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

type TypingTextComponentProps = {
  text: string | string[];
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  waitTime?: number;
};

const defaultAnimations = {
  hidden: { opacity: 0, y: -1 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

function TypingTextComponent({
  text,
  className,
  once,
  repeatDelay,
  waitTime,
}: TypingTextComponentProps) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          show();
        }, repeatDelay);
      }
    };

    if (isInView) {
      if (waitTime) {
        timeout = setTimeout(() => show(), waitTime);
      } else {
        show();
      }
    } else {
      controls.start("hidden");
    }
    return () => clearTimeout(timeout);
  }, [isInView, controls, repeatDelay, waitTime]);

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        // transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {textArray.map((line, index) => (
          <span key={index + line}>
            {line.split(" ").map((word, index) => (
              <span className="inline-block" key={index + word}>
                {word.split("").map((char, index) => (
                  <motion.span
                    className="inline-block"
                    variants={defaultAnimations}
                    key={index + char}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export default TypingTextComponent;
