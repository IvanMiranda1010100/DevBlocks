import React, { useState } from "react";

// Definición de los temas
export const lightMode = {
  background: "#ffffff",
  color: "#000000",
};

export const darkMode = {
  background: "#333333",
  color: "#ffffff",
};

export const DemoCode = ({ children, codeString }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); // Cambiar el tema
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    alert("Código copiado al portapapeles");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Abrir o cerrar dropdown
  };

  const currentTheme = isDarkMode ? darkMode : lightMode;

  return (
    <main
    className="bg-[#73A942] dark:bg-[#245501] rounded-lg mt-2"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Barra de Navegación */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
        {/* Breadcrumb */}
        <ol className="flex items-center space-x-2">
          <li>
            <a href="https://flowbite.com" className="text-blue-500">
              flowbite.com
            </a>
          </li>
          <li>/</li>
          <li>
            <button
              onClick={toggleDropdown}
              className="text-gray-700 dark:text-gray-300 flex items-center"
            >
              <span>databaseName</span>
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </li>
        </ol>

        {/* Dropdown */}
        {isDropdownOpen && (
          <ul className="absolute mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-md w-40 text-left">
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="https://themesberg.com" target="_blank" rel="noopener noreferrer">
                themesberg.com
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="https://ui.glass" target="_blank" rel="noopener noreferrer">
                ui.glass
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="https://iconscale.com" target="_blank" rel="noopener noreferrer">
                iconscale.com
              </a>
            </li>
          </ul>
        )}

        {/* Botón de Cambio de Tema */}
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isDarkMode ? "Cambiar a claro" : "Cambiar a oscuro"}
        </button>
      </nav>

      {/* Contenido */}
      <section
        className="p-4"
        style={{
          backgroundColor: isDarkMode ? "#555555" : "#f7f7f7",
        }}
      >
        {children}
      </section>

      {/* Botón de Copiar */}
      <footer className="p-4">
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Copiar código
        </button>
      </footer>
    </main>
  );
};
