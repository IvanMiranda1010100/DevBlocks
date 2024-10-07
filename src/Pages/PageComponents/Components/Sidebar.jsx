import React, { useState } from "react";
import { Link } from "react-router-dom";

const typeComponents = [
  {name:"Alert"},
  {name:"Avatar"},
  {name:"Badge"},
  {name:"Breadcrumb"},
  {name:"Button"},
  {name:"Card"},
  {name:"Checkbox"},
  {name:"Collapse"},
  {name:"Dialog"},
  {name:"Divider"},
  {name:"Drawer"},
  {name:"Dropdown"},
  {name:"Form"},
  {name:"Grid"},
  {name:"Icon"},
  {name:"Image"},
  {name:"Input"},
  {name:"Label"},
  {name:"Link"},
  {name:"List"},
  {name:"Menu"},
  {name:"Modal"},
  {name:"Popover"},
  {name:"Pagination"},
  {name:"Progress"},
  {name:"Radio"},
  {name:"Rating"},
  {name:"Select"},
  {name:"Skeleton"},
  {name:"Slider"},
  {name:"Spinner"},
  {name:"Switch"},
  {name:"Table"},
  {name:"Tabs"},
  {name:"Tag"},
  {name:"Textarea"},
  {name:"Toast"},
  {name:"Tooltip"},
  {name:"Upload"}
]

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {" "}
      {/* Cambiar h-full a h-screen */}
      {/* Sidebar */}
      <aside
        className={`fixed left-0 h-[130vh] w-64 p-9 dark:border-none transition-transform transform bg-[#AAD576] dark:bg-[#143601] dark:text-gray-100 shadow-lg z-40 overflow-y-auto scrollbar-hide ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:top-0 top-12`}
      >
        <nav className="space-y-8 text-sm">
          {/* Secciones del Sidebar */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-green-700 dark:text-green-400">
              Getting Started
            </h2>
            <div className="flex flex-col space-y-3 text-[16px]">
              <Link className="text-green-700 dark:text-green-300 " to="/docs">
                Installation
              </Link>
              <Link className="text-green-700 dark:text-green-300 " to="#">
                Plugins
              </Link>
              <Link className="text-green-700 dark:text-green-300 " to="#">
                Migrations
              </Link>
              <Link className="text-green-700 dark:text-green-300 " to="#">
                Appearance
              </Link>
              <Link className="text-green-700 dark:text-green-300 " to="#">
                Mamba UI
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-green-700 dark:text-green-400">
              Components
            </h2>
            <div className="flex flex-col space-y-3 text-[16px]">
              {typeComponents.map(({name})=>(
                <Link className="text-green-700 dark:text-green-300" to={`/docs/${name}`}>
                {name}
               </Link> 
              ))}
            </div>
          </div>
        </nav>
      </aside>
      {/* Botón para abrir/cerrar el Sidebar en móviles */}
      <button
        className="md:hidden btn-primary fixed right-4 z-50 p-3 rounded-full bg-green-600 text-white"
        onClick={toggleSidebar}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      {/* Overlay cuando el Sidebar está abierto en móviles */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* Contenido principal */}
      <main className="flex-1 h-full p-6">{children}</main>
      <style jsx>{`
        @layer utilities {
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
