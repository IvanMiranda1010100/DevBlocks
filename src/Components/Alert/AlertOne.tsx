const AlertOne = () => {
  return (
    <div className="flex items-center p-4 mb-4 text-sm bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-lg" role="alert">
      <svg
        className="w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm2 14.586l-4-4 1.414-1.414L14 13.172l4.586-4.586L20 10l-6 6z" />
      </svg>
      <span className="font-medium">Alerta Tipo Uno!</span> Esta es una alerta informativa.
    </div>
  );
};

export default AlertOne;
