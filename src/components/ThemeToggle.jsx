// components/ThemeToggle.js
import React, { useContext } from "react";
import { Switch } from "antd";
import AppContext from "../hook/AppContext";

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  const handleThemeToggle = (checked) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeToggle}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      style={{ marginBottom: "1rem" }}
    />
  );
};

export default ThemeToggle;
