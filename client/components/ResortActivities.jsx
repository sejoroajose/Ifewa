const ResortActivities = () => {
  return (
    <div className="bg-gray-100 p-8 w-full h-auto md:px-40 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex py-2 md:py-8 justify-center items-center">
          <h1 className="font-tt_ramillas text-2xl md:text-5xl">FUN ACTIVITIES IN RESORT</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2">

          {/* Write-up Box 1 */}
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              Scenic Picnic Spots
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              Discover the perfect picnic spot among rolling hills, tranquil lakes, and beautiful gardens. Its an experience that will create lasting memories.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 border-gray-600 mt-4 font-inter-cdnfonts">
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
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              Vegetable Picking Adventure
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              Explore our farm where you can pick your own vegetables, from tomatoes to lettuce,
              for a fresh and fun experience.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 border-gray-600 mt-4 font-inter-cdnfonts">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortActivities;
