import smallrooms from '../../Assets/smallrooms.webp';

export default function Testimonials() {
    const testimonials = [
      {
        text: "I am impressed by the quality of the service and freshness of the farm produce harvested from Ifewa Resort. Even more beautiful is that we sometimes get to handpick by ourselves. Every vegetable tastes refreshing, and their commitment to sustainable farm practices remains commendable.",
        name: "-  Bolu Akinfenwa",
        role: "Client",
        image: smallrooms,
      },
      {
        text: "The experience here has so far been enjoyable. Ifewa Resort stands out with the incredible variety of services, from the Agro Tour to the Country Club. Their customer service always goes the extra mile to answer my numerous questions, making the experience truly worthwhile.",
        name: "-	Ifeanyi Mark",
        role: "Client",
        image: smallrooms,
      },
      {
        text: "The quality of service from this company is unparalleled! As a returning client, their dedication to quality and excellence ensures that every interaction leaves you feeling satisfied. I won’t hesitate to tell more people about this project.",
        name: "-	Monisola Ajibade",
        role: "Client",
        image: smallrooms, // Use the imported local image
      },
    ];
  
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 italic text-gray-900 font-tt_ramillas">
         What our Fantastic Clients Have to Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col pb-4">
              <div className="bg-[#B7D1DA] bg-opacity-40 p-6 rounded-lg mb-8 relative">
                <p className="text-gray-600 leading-relaxed font-inter-cdnfonts">{testimonial.text}</p>
                <div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[16px]"
                  style={{ borderTopColor: 'rgba(183, 209, 218, 0.4)' }}
                />
              </div>
              <div className="flex items-center justify-center mt-8 space-x-3">
                <div className="w-16 h-16 relative rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || '/placeholder.svg'}
                    alt={`${testimonial.name}'s profile picture`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-inter-cdnfonts italic text-xl text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-500 font-inter-cdnfonts italic">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  