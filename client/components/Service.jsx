import React from 'react';
import { TiArrowDown } from 'react-icons/ti';


const Service = () => {
    return(
        <>
            <div className='flex flex-col gap-6 md:gap-10 justify-center '>
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
                        <h1 className='text-3xl text-black '>5 SERVICES</h1>
                        <h2 className='text-3xl text-gray-500'>HEALED BY GRACEFUL TRANQUILITY</h2>
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
                        <p>{item.id}</p>
                        <h1 className='text-3xl'>{item.title}</h1>
                        <div className='flex flex-row justify-between items-center'>
                            <p>Agriculture been that right....</p>
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

export default Service