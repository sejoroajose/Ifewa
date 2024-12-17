import React from "react";

const CountryClub = () => {
  return (
    <section className=" p-6  ">
        <div className="relative w-full h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                backgroundImage: `url('/Images/AgroTour.jpg')`,
                }}
            ></div>


            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
            
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                <div className="relative z-20 text-center">
                    <h1 className="font-bold text-4xl mb-6">01</h1>
                    <h1 className="text-4xl font-bold mb-4">Agro Tour</h1>
                    <p className="text-lg max-w-lg">
                        Discover the beauty of nature and experience the magic of agriculture. Nestled in
                        nature’s embrace, AgroTour Resort is your ultimate escape into the tranquil beauty of
                        the countryside. Designed to blend comfort and sustainability, our resort offers a
                        unique experience where modern luxury meets agricultural serenity.
                    </p>
                </div>
            </div>
        </div>
    
      
    </section>
  );
};

export default CountryClub;
