const CardOne = () => {
  return (
    <div className="max-w-sm mx-auto my-4 shadow-lg rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://via.placeholder.com/150"
            alt="Card image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Card Title</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Card Heading</h1>
          <p className="mt-2 text-gray-500">
            This is an example of a fully responsive card component using Tailwind CSS. It adapts
            perfectly to any screen size.
          </p>
          <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
