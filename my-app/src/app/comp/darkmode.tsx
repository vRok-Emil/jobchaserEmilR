
import DarkModeToggle from "react-dark-mode-toggle";
import { useDarkMode } from "./darkMode-context";

export function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeToggle
      onChange={toggleDarkMode}
      checked={darkMode}
      size={60}
      speed={2}
    />
  );
}