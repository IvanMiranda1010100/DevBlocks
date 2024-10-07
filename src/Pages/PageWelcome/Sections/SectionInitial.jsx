import { Link } from "react-router-dom";

export const SectionInitial = () => {
  return (
    <header className="px-20 dark:text-white text-center">
      <a
  className="inline-flex items-center justify-between w-full max-w-md mx-auto p-3 mb-5 text-sm text-[#143601] bg-[#538D22] rounded-full hover:bg-[#73A942] dark:bg-[#1A4301] dark:text-[#AAD576] hover:dark:bg-[#245501] transition-colors duration-200 ease-in-out"
  href="/"
  aria-label="Ver nuevos componentes CSS y Tailwind"
>
  <span className="text-xs bg-[#245501] dark:bg-[#538D22] rounded-full text-white px-4 py-1.5 mr-3">
    New
  </span>
  <span className="flex-1 mr-2 text-sm font-medium text-left">
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


      <h1 className="text-4xl lg:text-6xl">
      Crea aplicaciones web rápidamente con componentes Tailwind CSS y estilos personalizados para una experiencia única.
      </h1>
      <h3 className="text-2xl sm:text-xl mt-5">
      Inicia tu viaje de desarrollo con una biblioteca abierta de más de 100 componentes de UI, secciones y páginas creadas con Tailwind CSS y CSS puro, listas para personalizar y utilizar.
      </h3>
      <div className="flex flex-col mb-8 mt-6 md:flex-row lg:justify-center"><Link to="/docs" className="btn-primary font-medium rounded-lg text-xl md:text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center">Get started</Link>

      <a href="#components" className=" border border-gray-20 btn-secondary dark:border-gray-600 font-medium rounded-lg text-lg md:text-base px-6 py-2.5 text-center inline-flex justify-center items-center"><svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-category-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg><span className="ml-2">Explore components</span></a></div>
    </header>
    
  );
};
