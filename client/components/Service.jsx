import { useState } from 'react';

const WellnessPaths = () => {
  const [activeButton, setActiveButton] = useState(0); 



  const buttonImages = [
    'https://res.cloudinary.com/dnu6az3um/image/upload/v1740151634/dusan-adamovic-yFSATNC7aJg-unsplash_i0tvru.jpg',
    'https://res.cloudinary.com/dnu6az3um/image/upload/v1740152613/bg1_ttees0.jpg',
    'https://res.cloudinary.com/dnu6az3um/image/upload/v1740152088/bg5_veh6gz.jpg',
    'https://res.cloudinary.com/dnu6az3um/image/upload/v1740152602/bg3_tssdro.jpg',
  ]

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
            <h1 className="text-3xl md:text-5xl font-ramillas-regular">
              Discover and Explore a Lifetime <br />
              of{' '}
              <em className="font-ramillas-italic">Wellness and Lifestyle</em>
            </h1>
          </header>
          <div className="">
            <p className="font-ramillas-regular">
              Located in Moniya-Iseyin Express Road, Ibadan, Oyo State, Ifewa
              Resort promises more than a getaway;
              <br />
              bringing you an experience that rejuvenates the mind, body and
              spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Button Section */}
      <section className="w-full h-screen md:h-[30rem]  pb-4 md:pb-20 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 relative">
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
              <h3 className="font-ramillas-regular text-lg font-bold">
                {button.title}
              </h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
};

export default WellnessPaths;

