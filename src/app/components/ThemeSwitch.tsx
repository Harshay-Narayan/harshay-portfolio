import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";
function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="p-5 sm:hover:scale-[1.3] active:scale-[1.5] transition-all dark:text-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
