import { useState } from "react";
import { X } from "lucide-react";

const ResortActivities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Function to open popup with specific content
  const openPopup = (activity) => {
    setSelectedActivity(activity);
  };

  // Function to close popup
  const closePopup = () => {
    setSelectedActivity(null);
  };

  // Mapping activity names to images
  const activityImages = {
    "SCENIC ADVENTURE": "Images/SCENIC-ADVENTURE.jpg",
    "HOSPITALITY": "Images/hospitality-1.jpg",
    "PRODUCTION AND RETAIL": "Images/PRODUCTION.jpg",
  };

  return (
    <div className="bg-gray-100 p-8 w-full h-auto md:px-40 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="flex py-2 md:py-8 justify-center items-center">
          <h1 className="font-tt_ramillas text-2xl md:text-5xl">
            DESIGNED WITH YOU AND YOURS IN MIND
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2">
          {/* Scenic Adventure */}
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              SCENIC ADVENTURE
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              Guided visits to observe and participate in farming activities such as planting, harvesting, livestock care, horse riding, and wildlife viewing.
            </p>
            <button
              onClick={() => openPopup("SCENIC ADVENTURE")}
              className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white"
            >
              Read More
            </button>
          </div>

          {/* Image Box 1 */}
          <div className="bg-white shadow-lg overflow-hidden">
            <img src="Images/picking.jpg" alt="adventure" className="w-full h-full object-cover" />
          </div>

          {/* Hospitality */}
          <div className="bg-white shadow-lg overflow-hidden">
            <img src="Images/hospitality.jpg" alt="hospitality" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              HOSPITALITY
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              50 units of luxurious cottages designated for rustic accommodations with modern amenities for staycation or vacation.
            </p>
            <button
              onClick={() => openPopup("HOSPITALITY")}
              className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white"
            >
              Read More
            </button>
          </div>

          {/* Production and Retail */}
          <div className="bg-white flex flex-col gap-4 justify-center items-center text-center p-6 shadow-lg">
            <h1 className="text-3xl font-semibold text-gray-800 font-tt_ramillas">
              PRODUCTION AND RETAIL
            </h1>
            <p className="text-gray-600 mt-2 font-inter-cdnfonts">
              Direct sales of fresh products including green vegetables rich in macro and multi nutrients needed for overall health and wellness.
            </p>
            <button
              onClick={() => openPopup("PRODUCTION AND RETAIL")}
              className="text-gray-800 border-2 px-3 py-2 hover:rounded-md border-gray-600 mt-4 font-inter-cdnfonts hover:bg-ifewa-earth hover:border-0 hover:text-white"
            >
              Read More
            </button>
          </div>

          <div className="bg-white shadow-lg overflow-hidden">
            <img src="Images/produce.jpg" alt="Fruit Picking" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 w-3/4 md:w-1/2 rounded-lg shadow-lg">
            <div className="flex flex-row justify-between">
              <h2 className="text-2xl font-inter-cdnfonts font-bold text-gray-800">{selectedActivity}</h2>
              <button
                onClick={closePopup}
                className="p-2 bg-ifewa-gold text-white rounded-full hover:bg-ifewa-earth"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Display Image Based on Selected Activity */}
            <div className="mt-4">
              <img src={activityImages[selectedActivity]} alt={selectedActivity} className="w-full h-64 object-cover rounded-md" />
            </div>

            <p className="text-gray-600 mt-4 text-justify font-tt_ramillas md:mt-12 p-4 md:p-10">
              {selectedActivity === "SCENIC ADVENTURE" &&
                "Ifewa Resort aims to create a vibrant agro-tourism experience; scenic adventure featuring personal bonding and unwinding activities, “pick-your-own” fruit sessions, educational workshops on sustainable farming, cooking classes using farm-fresh produce, on-site restaurant serving fresh locally grown meals, and offering products like dry maize, corn meal, palm oil, fresh/dry meat, and organic fertilizer. From serenity to functionality, this adventure presents a perfect opportunity to reconnect with nature and learn about sustainable farming on the go."}
              {selectedActivity === "HOSPITALITY" &&
                "Ifewa Resort boasts of a feel-at-home experience that affords you a lifetime of wellness and lifestyle; an escape from the typical everyday hustle and bustle. From the moment you arrive, our warm hospitality ensures you feel right at home, whether you choose to relax by the pool, indulge in gourmet dining, explore local culture, or enjoy thrilling outdoor activities. The resort is nestled in the heart of breathtaking landscapes, promises more than a getaway, and our team remains committed to catering to your every need during your time here."}
              {selectedActivity === "PRODUCTION AND RETAIL" &&
                "Get access to fresh, nutrient-rich vegetables and other farm products directly from our production hub, ensuring the best quality for your health and wellness."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResortActivities;
