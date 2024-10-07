const AlertThree = () => {
  return (
    <div className="flex items-center p-4 mb-4 text-sm bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 rounded-lg" role="alert">
      <svg
        className="w-5 h-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1 1h22v22H1V1zm12 6h-2v8h2V7zm0 10h-2v2h2v-2z" />
      </svg>
      <span className="font-medium">Alerta Tipo Tres!</span> Esta es una alerta de advertencia.
    </div>
  );
}

export default AlertThree