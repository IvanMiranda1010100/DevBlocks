import { Link } from "react-router-dom";

export const SectionInitial = () => {
  return (
    <header className="px-20 dark:text-white text-center">
      <a
  className="inline-flex dark:border dark:border-gray-200 dark:border-opacity-35 items-center justify-between px-1 py-1 pr-4 mb-5 text-sm text-[#143601] bg-[#538D22] rounded-full hover:bg-[#73A942] dark:bg-[#1A4301] dark:text-[#AAD576] hover:dark:bg-[#245501] transition-colors duration-200 ease-in-out"
  href="/"
  aria-label="Ver nuevos componentes CSS y Tailwind"
>
  <span className="text-xs bg-[#245501] dark:bg-[#538D22] rounded-full text-white px-4 py-1.5 mr-3">
    New
  </span>
  <span className="mr-2 text-sm font-medium">
    Nuevos componentes CSS, Tailwind CSS, haz <span className="font-semibold underline underline-offset-2">click</span> para verlos
  </span>
  <svg
    className="w-2.5 h-2.5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 10"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 9 4-4-4-4"
    ></path>
  </svg>
</a>

      <h1 className="text-6xl ">
      Crea aplicaciones web rápidamente con componentes Tailwind CSS y estilos personalizados para una experiencia única.
      </h1>
      <h3 className="text-xl mt-5">
      Inicia tu viaje de desarrollo con una biblioteca abierta de más de 100 componentes de UI, secciones y páginas creadas con Tailwind CSS y CSS puro, listas para personalizar y utilizar.
      </h3>
      <div className="flex flex-col mb-8 mt-6 md:flex-row lg:justify-center"><Link to="/components" className="btn-primary font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center">Get started</Link>

      <a href="#components" className=" border border-gray-20 btn-secondary dark:border-gray-600 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"><svg className="w-3.5 h-3.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"></path></svg><span className="ml-2">Explore components</span></a></div>
    </header>
  );
};
