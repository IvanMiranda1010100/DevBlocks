const AlertTwo = () => {
  return (
    <div className="flex items-center p-4 mb-4 text-sm bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded-lg" role="alert">
      <svg
        className="w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1 1h22v22H1V1zm2 2v18h18V3H3zm6 6h6v6H9V9z" />
      </svg>
      <span className="font-medium">Alerta Tipo Dos!</span> Esta es una alerta de error.
    </div>
  );
};

export default AlertTwo