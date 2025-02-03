/* import { TiArrowDown } from 'react-icons/ti';


const Service = () => {
    return(
        <>
            <div className='flex flex-col gap-6 md:gap-10 justify-center py-6 md:py-20'>
                <div className='text-center '>
                    <div className='text-center justify-center'>
                        <a href="/" className="absolute ">
                            <img
                                className="h-20 justify-center w-[150px] -ml-16"
                                src="/Images/logo.png"
                                alt="Ifewa Resort Logo"
                            />
                        </a>
                    </div>
                    <div className='mt-16 md:mt-20'>
                        <h1 className='text-3xl text-black font-tt_ramillas'>5 SERVICES</h1>
                        <h2 className='text-3xl text-gray-500 font-tt_ramillas'>HEALED BY GRACEFUL TRANQUILITY</h2>
                    </div>
                   
                
                </div>

                <div className='flex flex-col  md:grid md:grid-cols-2 gap-9 md:gap-16 justify-center items-center px-10 md:px-36'>
                {[
                    { id: '01', title: 'Agro Tour' },
                    { id: '02', title: 'Country Club' },
                    { id: '03', title: 'Cottage Ville' },
                    { id: '04', title: 'Service Hub' },
                ].map((item, index) => (
                    <div
                    key={index}
                    className='group relative transition-all duration-300'
                    >
                        <div 
                            className='absolute top-0 left-0 h-[2px] bg-black w-1/4 group-hover:w-full transition-all duration-500'>         
                        </div>
                        <p className='font-inter-cdnfonts'>{item.id}</p>
                        <h1 className='text-3xl font-tt_ramillas'>{item.title}</h1>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='font-inter-cdnfonts'>Agriculture been that right....</p>
                            <div
                            className='p-1  bg-gray-300 group-hover:bg-gray-200 border-b-2 border-black transition-all duration-300'
                            >
                            <TiArrowDown size={30} className='text-black group-hover:text-gray-400 transition-all duration-300' />
                            </div>
                        </div>
                    </div>
                ))}
                </div>

            </div>
            

        </>
    )
}

export default Service */

import { useState } from 'react';

const WellnessPaths = () => {
  const [activeButton, setActiveButton] = useState(0); // Track active button



  const buttonImages = [
    "/Images/land.webp", 
    "/Images/p1.jpg",    
    "/Images/background.webp", 
    "/Images/land.webp",  
  ];

  const buttonTitles = [
    { title: "Nature" },
    { title: "Wellness" },
    { title: "Lifestyle" },
    { title: "Functionality" },
  ];



  return (
    <div>
      <section className="v-green-light">
        <div className="flex flex-col gap-8 md:gap-16 pl-8 md:pl-36 py-2 md:py-20 pr-6 md:pr-0 ">
            <header>
              <h1 className='text-3xl md:text-5xl font-tt_ramillas'>
                Discover and Explore a Lifetime <br />
                of <em className='italic'>Wellness and Lifestyle</em>
              </h1>
            </header>
            <div className="">
                <p className='font-inter-cdnfonts'>Located in Moniya-Iseyin Express Road, Ibadan, Oyo State, Ifewa Resort promises more than a getaway;<br />
                 bringing you an experience that rejuvenates the mind, body and spirit.
                </p>
            </div>
        </div>
      </section>

      {/* Button Section */}
      <section
        className="w-full h-screen md:h-[30rem]  pb-4 md:pb-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 relative">

        {buttonTitles.map((button, index) => (
          <div
            key={index}
            className={`flex-1 relative h-32 md:h-full  overflow-hidden cursor-pointer transition-opacity duration-300 ${
              activeButton === index ? 'opacity-80' : 'opacity-100'
            }`}
            onClick={() => setActiveButton(index)}
            style={{
              backgroundImage: `url(${buttonImages[index]})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex  items-center justify-center text-white">
 {/*                <div>
                    <p
                    className="text-xl p-4 bg-transparent font-inter-cdnfonts border-2 border-white flex items-center justify-center"

                    >
                    {button.acronym}
                    </p>
                </div> */}
                <h3 className="font-inter-cdnfonts text-lg font-bold">{button.title}</h3>
            </div>
            </div>

        ))}
      </section>
    </div>
  );
};

export default WellnessPaths;

