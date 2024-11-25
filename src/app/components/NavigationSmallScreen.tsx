import { AnimatePresence, motion } from "framer-motion";
import { BsX } from "react-icons/bs";
import { navMenuItems } from "@/lib/data";
import Link from "next/link";

const closeButtonVariant = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const navigationMenuVariant = {
  initial: {
    scaleY: 0,
    transition: { delay: 0.5 },
  },
  animate: {
    scaleY: 1,
    transition: { duration: 1, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 1.2, ease: [0.12, 0, 0.39, 0] },
  },
};
const fadeInAnimationVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

type NavigationSmallScreenProps = {
  showNavigation: boolean;
  handleShowNavigation: () => void;
};

function NavigationSmallScreen({
  showNavigation,
  handleShowNavigation,
}: NavigationSmallScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {showNavigation && (
        <motion.div
          variants={navigationMenuVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 w-screen h-screen overflow-hidden origin-top bg-white items-center text-4xl dark:text-white dark:bg-black sm:hidden"
        >
          <div className="w-full flex justify-end p-6">
            <motion.button
              onClick={handleShowNavigation}
              variants={closeButtonVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="dark:text-white"
              aria-label="close navigation"
            >
              <BsX />
            </motion.button>
          </div>
          <motion.ul
            className="flex flex-col items-center gap-10 sm:hidden"
            variants={{
              animate: {
                transition: {
                  ease: "easeIn",
                  delayChildren: 0.5,
                  staggerChildren: 0.2,
                },
              },
              exit: {
                transition: {
                  ease: "easeOut",
                  staggerChildren: 0.2,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {navMenuItems.map((item) => (
              <div key={item.path} className="overflow-hidden">
                <motion.li
                  variants={fadeInAnimationVariant}
                  onClick={handleShowNavigation}
                >
                  <Link href={item.path}>{item.label}</Link>
                </motion.li>
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NavigationSmallScreen;
