import { useActiveSectionContext } from "@/context/active-section-context";
import { sectionName } from "./types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function useSectionInView(sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { activeSection, setActiveSection, timeOfLastClick } =
    useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);
  return { ref, inView };
}
