import React from "react";

const CottageVille = () => {
  return (
    <section className=" p-6  ">
        <div className="relative w-full h-screen">
            <div >
                <img 
                    src="/Images/CotageVille.jpg" 
                    alt="countryclub" 
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                />
            </div>


           <div className="">
                <div className="relative w-full z-20  pt-4 md:pt-16  pl-4 md:pl-14">
                    <h1 className="font-bold text-4xl mb-6">03</h1>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-60">
                        <h1 className="text-4xl font-bold mb-4">Cottage Ville</h1>
                        <p className="text-lg max-w-lg">
                            Experience cozy luxury in our charming Cottage Ville, designed for those who crave privacy and tranquility. 
                            Nestled amidst lush greenery, each cottage offers a serene escape with modern amenities, perfect for families or couples seeking a peaceful retreat.
                        </p>
                    </div>
                            
                </div>
           </div>
            
            
        </div>
    
      
    </section>
  );
};

export default CottageVille;
