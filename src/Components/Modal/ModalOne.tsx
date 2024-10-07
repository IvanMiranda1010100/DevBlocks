import { useState } from "react";

const ModalOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6">
            <h2 className="text-2xl font-bold mb-4">Responsive Modal</h2>
            <p className="text-gray-700 mb-4">
              This is a modal. It's responsive and adapts to different screen sizes.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalOne;
