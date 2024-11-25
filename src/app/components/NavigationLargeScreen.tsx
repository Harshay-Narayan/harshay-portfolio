import { navMenuItems } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import { motion } from "framer-motion";

function NavigationLargeScreen() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className="hidden bg-transparent w-full h-full sm:flex justify-center text-sm items-center dark:text-white">
      <ul className="flex items-center gap-10">
        {navMenuItems.map((item) => (
          <li className="relative p-2 rounded-2xl" key={item.path}>
            <Link
              href={item.path}
              onClick={() => {
                setActiveSection(item.label);
                setTimeOfLastClick(Date.now);
              }}
            >
              {item.label}
              {item.label === activeSection && (
                <motion.span
                  className="bg-gray-300/40 rounded-2xl absolute inset-0 -z-10 dark:bg-white/50"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                ></motion.span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationLargeScreen;
