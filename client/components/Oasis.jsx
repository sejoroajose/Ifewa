/* import villas from "../../Assets/villas.jpg"; // Path to villas image
import villawater from "../../Assets/villawater.jpg";
import ground from "../../Assets/ground.jpg" // Path to the uploaded image you shared earlier

const Oasis = () => {
  return (
    <div className="w-full">
     
      <div className="bg-[#F8F5ED] relative h-[138vh] w-full">
        {/* Text Content 
        <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
          <hr className="border-t-2 border-gray-500 w-[80%] mx-auto mb-2" />
          <p className="text-lg text-gray-500">Villas</p>
          <h1 className="text-4xl font-bold text-gray-700 mt-9">
            An Oasis of <br /> Tranquil Sway
          </h1>
        </div>

        {/* Villas Image Overlapping Blue Section 
        <img
          src={villas}
          alt="Oasis Pool"
          className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[1070px] h-[700px] object-cover shadow-lg z-10"
        />
      </div>

      {/* Bottom Section with Blue Background 
      <div className="bg-[#8AC3D8] relative h-[100vh] pt-32 w-full flex justify-center items-center">
        {/* Second Image and Text Content 
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

      {/* Bottom Section with Blue Background 
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
          {/* Second Image and Text Content 
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

 */

import rooms from "../../Assets/rooms.webp";
import smallrooms from '../../Assets/smallrooms.webp';
import villawater from "../../Assets/villawater.jpg";

const Oasis = () => {
  return (
    <div className="w-full min-h-screen relative">
      {/* White background */}
      <div className="absolute top-0 left-0 right-0 h-full bg-[#f6f3e7] z-0"></div>

      {/* Content container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
        {/* Top Section */}
        <div className="w-full px-4 pt-16 pb-8 text-center">
          <hr className="border-t-2 border-gray-500 w-[80%] mx-auto mb-2" />
          <p className="text-lg text-gray-800">Villas</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-9 mb-20">
            An Oasis of <br /> Tranquil Sway
          </h1>
          
          {/* Villas Image */}
          <div className="relative w-4/5 mx-auto" style={{ height: '80vh' }}>
            <img
              src={smallrooms}
              alt="Oasis Pool"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full object-cover shadow-lg z-20"
            />
          </div>
        </div>

        {/* Background image (rooms) starting from 50% of viewport height */}
        <div 
          className="absolute md:top-[110vh] top-[100vh] left-0 right-0 bottom-0 bg-cover bg-center z-10 h-[250vh]" 
          style={{ backgroundImage: `url(${rooms})` }}
        ></div>

        {/* Middle Section */}
        <div className="relative z-20 w-full py-16 flex flex-col md:flex-row justify-center lg:gap-36 items-center mt-[5vh]">
          <img
            src={villawater}
            alt="villawater"
            className="md:w-full w-[50vw] h-[30vh] bg-left md:bg-center flex max-w-lg object-cover shadow-lg mb-8 md:mb-0 md:mr-8"
          />
          <div className="text-white text-center max-w-lg px-4">
            <p className="text-lg mb-4 leading-relaxed">
              Private villas offer the luxury <br />
              of having a spacious retreat all to yourself.
            </p>
            <p>
              AYANA Villas rooms exude the richness of Balinese craftsmanship,
              with intricate details and timeless elegance.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative z-20 w-full pt-7 flex flex-col-reverse md:flex-row justify-center items-center lg:gap-80">
          <div className="text-white text-center max-w-lg px-4 mt-8 md:mt-0 md:mr-8">
            <p className="text-lg mb-4 leading-relaxed">
              Private villas offer the luxury <br />
              of having a spacious retreat all to yourself.
            </p>
            <p>
              AYANA Villas rooms exude the richness of Balinese craftsmanship,
              with intricate details and timeless elegance.
            </p>
          </div>
          <img
            src={villawater}
            alt="villawater"
            className="w-[20%] max-w-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Oasis;

