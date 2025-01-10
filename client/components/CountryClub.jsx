
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


            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4">
            
                
                <div className="relative z-20 text-center">
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
