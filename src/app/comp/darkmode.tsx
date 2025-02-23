
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./darkMode-context";

export function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const toggles = () => {
    toggleDarkMode();
  };
  return (
<DarkModeSwitch
          style={{ marginBottom: "1rem" }}
          checked={darkMode}
          onChange={toggles}
          size={60}
        />
    
  );
}