const ResortActivities = () => {
  return (
    <div className="bg-gray-100 w-full h-auto py-16 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2 ">
          
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800">
              Scenic Picnic Spots
            </h1>
            <p className="text-gray-600 mt-2">
              Discover the perfect picnic spot among rolling hills, tranquil lakes, and beautiful gardens. 
              It's an experience that will create lasting memories.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 border-gray-800 mt-4">
              Read More
            </button>
          </div>

          {/* Image Box 1 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <img
              src="Images/picnic.jpg"
              alt="Vegetable Picking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Box 2 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <img
              src="Images/pickingfruit.jpg"
              alt="Fruit Picking"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Write-up Box 2 */}
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800">
              Vegetable Picking Adventure
            </h1>
            <p className="text-gray-600 mt-2">
              Explore our farm where you can pick your own vegetables, from tomatoes to lettuce, 
              for a fresh and fun experience.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 border-gray-800 mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortActivities;
