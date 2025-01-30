const ResortActivities = () => {
  return (
    <div className="bg-gray-100 p-8 w-full h-auto md:px-40 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex py-2 md:py-8 justify-center items-center">
          <h1 className="font-tt_ramillas text-2xl md:text-5xl">DESIGNED WITH YOU AND YOURS IN MIND</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2">

          {/* Write-up Box 1 */}
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              SCENIC ADVENTURE
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              Guided visits to observe and participate in farming activities such as planting, harvesting, livestock care, horse riding, and wildlife viewing.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white">
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
              HOSPITALITY
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              50 units of luxurious cottages designated for rustic accommodations with modern amenities for  staycation or vacation.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white">
              Read More
            </button>
          </div>


          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              PRODUCTION AND RETAIL
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
            Direct sales of fresh products including green vegetables rich in macro and multi nutrients needed for overall health and wellness.
            </p>
            <button className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white">
              Read More
            </button>
          </div>

          <div className="bg-white shadow-lg overflow-hidden">
            <img
              src="Images/pickingfruit.jpg"
              alt="Fruit Picking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResortActivities;
