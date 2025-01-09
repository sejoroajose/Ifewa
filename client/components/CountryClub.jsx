import React from "react";

const CountryClub = () => {
  return (
    <section className=" p-6  ">
        <div className="relative w-full h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{
                backgroundImage: `url('/Images/countryclub.jpg')`,
                }}
            ></div>


            <div >
            
                
                <div  className="relative w-full z-20  pt-4 md:pt-16  pl-4 md:pl-14">
                    <h1 className="font-bold text-4xl mb-6">02</h1>
                    <h1 className="text-4xl font-bold mb-4">Country Club</h1>
                    <p className="text-lg max-w-lg">
                        Indulge in leisure and elegance at our exclusive Country Club. 
                        Featuring world-class facilities, scenic views, and exceptional services, 
                        it’s the ultimate destination for relaxation, social gatherings, and unforgettable moments
                    </p>
                </div>
            </div>
        </div>
     
    </section>
  );
};
 
export default CountryClub;
