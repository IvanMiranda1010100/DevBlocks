export const SectionFinal = () => {
  return(
    <>
     <section className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 dark:from-green-800 dark:via-green-900 dark:to-green-700 p-8 rounded-lg shadow-lg mt-8 text-center border border-gray-200 dark:border-gray-600 transition duration-300">
      <h2 className="text-3xl font-bold mb-4 text-[#245501] dark:text-[#73A942]">
        ⭐ ¡Dale Estrellas a Nuestro Proyecto!
      </h2>
      <p className="text-[#245501] dark:text-[#AAD576] mb-6">
        Si disfrutas de este proyecto y quieres apoyarlo, ¡no dudes en dejarnos una estrella en GitHub! 
        Cada estrella cuenta y nos motiva a seguir mejorando.
      </p>
      <a
        href="https://github.com/tuusuario/tu-repo" // Reemplaza con tu URL de GitHub
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200"
      >
        ⭐ Dar Estrella
      </a>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-[#245501] dark:text-[#73A942]">
          ¿Qué puedes hacer?
        </h3>
        <ul className="text-left mt-2 text-[#245501] dark:text-[#AAD576]">
          <li>✅ Contribuir con nuevas funciones</li>
          <li>✅ Reportar problemas o errores</li>
          <li>✅ Compartir el proyecto con tus amigos</li>
        </ul>
      </div>
    </section>
    </>
  )
}