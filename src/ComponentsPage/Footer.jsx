export const Footer = () => {
  return (
    <footer className="w-full px-6 py-10 text-gray-800 h-fit dark:text-gray-200 md:px-14 md:py-14 bg-[#AAD553] dark:bg-[#143601]">
      {/* Sección superior del footer */}
      <div className="flex flex-col items-center justify-between md:flex-row md:items-start">
        {/* Logo y nombre */}
        <div className="flex flex-col items-center w-full mb-8 md:items-start md:mb-0 md:w-1/3">
          <div className="flex items-center gap-4">
            <img className="w-12 h-12" src="/public/logo.png" alt="Logo DevBlocks" />
            <div className="text-4xl font-semibold text-gray-800 dark:text-gray-200">DevBlocks</div>
          </div>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 md:text-left">
            Component free for devs.
          </p>
        </div>
        {/* Secciones de enlaces */}
        <div className="grid w-full grid-cols-2 gap-10 text-center md:grid-cols-3 md:w-2/3 md:text-left">
          {/* Columna Explore */}
          <div>
            <div className="mb-4 font-bold text-gray-600 uppercase dark:text-gray-300">Explore</div>
            <a href="#features" className="block ">Features</a>
            <a href="#docs" className="block ">Docs</a>
            <a href="#pricing" className="block ">Pricing</a>
            <a href="#security" className="block ">Security</a>
          </div>
          {/* Columna Company */}
          <div>
            <div className="mb-4 font-bold text-gray-600 uppercase dark:text-gray-300">Company</div>
            <a href="#about" className="block ">About Us</a>
            <a href="#contact" className="block ">Contact</a>
            <a href="#support" className="block ">Support</a>
            <a href="#news" className="block ">News</a>
          </div>
          {/* Columna Legal */}
          <div>
            <div className="mb-4 font-bold text-gray-600 uppercase dark:text-gray-300">Legal</div>
            <a href="#imprint" className="block ">Imprint</a>
            <a href="#privacy" className="block ">Privacy Policy</a>
            <a href="#terms" className="block ">Terms of Use</a>
          </div>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="w-full my-8 border-t border-gray-600"></div>

      {/* Sección inferior */}
      <div className="text-center text-gray-600 dark:text-gray-300">
        © 2024 DevBlocks - All rights reserved.
      </div>
    </footer>
  );
};
