/* import React from 'react';

const Oasis = () => {
  return (
    <div>
      
      <div className='flex flex-col justify-center items-center pt-36'>
        <div className="mx-52 text-black w-52 h-2"></div>
        <p>Villas</p>
      </div>

      <div className='text-center mt-8'>
        <h1 className='text-3xl font-bold mb-4'>An oasis of tranquil sway</h1>
        <img
          src="https://via.placeholder.com/600x400" // Replace with your actual image URL
          alt="Tranquil Oasis"
          width="1000"
          height="600"
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default Oasis;
 */

import villas from "../../Assets/villas.jpg"; // Path to villas image
import villawater from "../../Assets/villawater.jpg";
import ground from "../../Assets/ground.jpg" // Path to the uploaded image you shared earlier

const Oasis = () => {
  return (
    <div className="w-full">
      {/* Top Section with Off-White Background */}
      <div className="bg-[#F8F5ED] relative h-[138vh] w-full">
        {/* Text Content */}
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <hr className="border-t-2 border-gray-500 w-[80%] mx-auto mb-2" />
          <p className="text-lg text-gray-500">Villas</p>
          <h1 className="text-4xl font-bold text-gray-700 mt-9">
            An Oasis of <br /> Tranquil Sway
          </h1>
        </div>

        {/* Villas Image Overlapping Blue Section */}
        <img
          src={villas}
          alt="Oasis Pool"
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[1070px] h-[700px] object-cover shadow-lg z-10"
        />
      </div>

      {/* Bottom Section with Blue Background */}
      <div className="bg-[#8AC3D8] relative h-[100vh] pt-32 w-full flex justify-center items-center">
        {/* Second Image and Text Content */}
        <div className="flex items-center justify-center w-[90%] max-w-[1200px]">
          <img
            src={villawater}
            alt="villawater"
            className="w-[500px] object-cover shadow-lg"
          />
          <div className="ml-3 text-white text-center max-w-[550px]">
            <p className="text-lg mb-4 leading-relaxed justify-center text-center">
              Private villas offer the luxury <br />
              of having a spacious retreat all to yourself.
            </p>
            <p>
              AYANA Villas rooms exude the richness of Balinese craftsmanship,
              with intricate details and timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section with Blue Background */}
      <div className="bg-[#8AC3D8] relative h-[60vh] w-full flex justify-center items-center">
          <div className="ml-3 text-white text-center max-w-[550px] pl-24">
            <p className="text-lg mb-4 leading-relaxed justify-center text-center">
              Private villas offer the luxury <br />
              of having a spacious retreat all to yourself.
            </p>
            <p>
              AYANA Villas rooms exude the richness of Balinese craftsmanship,
              with intricate details and timeless elegance.
            </p>
          </div>
          {/* Second Image and Text Content */}
        <div className="flex items-center justify-center w-[90%] max-w-[1200px]">
          <img
            src={villawater}
            alt="villawater"
            className="w-[500px] object-cover shadow-lg"
          />
        </div>
      </div>
      <div>
        <img 
          src={ground}
          alt='ground'
          className='w-[full] h-[1005vh]'
        />
      </div>
    </div>
  );
};

export default Oasis;

