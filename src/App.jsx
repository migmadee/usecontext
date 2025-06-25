import { useState, useEffect } from "react";
import Component2 from "./components/Component2";
import { Card, Typography } from "antd";
import AppContext from "./hook/AppContext";
import Greeting from "./components/Greeting"
import ThemeToggle from "./components/ThemeToggle"

const App = () => {
  const users = "MigmaDee";
  const [language, setLanguage] = useState("en");

  const translations = {
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  }

  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const isDark = savedTheme === "dark" || savedTheme === null
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle("dark", isDark)
  }, [])

  return (
    <AppContext.Provider
      value={{
        users,
        language,
        setLanguage,
        translations,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <div
        style={{
          display: "flex",         
          justifyContent: "center", 
          alignItems: "center",     
          height: "100vh",          
          backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
        }}
      >
        <Card
          style={{
            width: "500px",
            background: isDarkMode ? "#333" : "#ffd666",
            color: isDarkMode ? "#fff" : "#000",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <ThemeToggle />

          <Typography.Title
            level={1}
            style={{ color: isDarkMode ? "#fff" : "#000" }}
          >
            {`Hello ${users}!`}
          </Typography.Title>

          <Component2 />
          <Greeting />
        </Card>
      </div>
    </AppContext.Provider>
  )
}

export default App
