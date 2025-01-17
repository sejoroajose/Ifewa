import smallrooms from '../../Assets/smallrooms.webp';

export default function Testimonials() {
    const testimonials = [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae provident pariatur, amet aspernatur et cupiditate eos reprehenderit exercitationem, quidem voluptate mollitia officiis corporis beatae atque magni!",
        name: "John Smith",
        role: "Client",
        image: smallrooms,
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae provident pariatur, amet aspernatur et cupiditate eos reprehenderit exercitationem, quidem voluptate mollitia officiis corporis beatae atque magni!",
        name: "Jane Doe",
        role: "Client",
        image: smallrooms,
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab sunt repudiandae voluptatem quae provident pariatur, amet aspernatur et cupiditate eos reprehenderit exercitationem, quidem voluptate mollitia officiis corporis beatae atque magni!",
        name: "John Smith",
        role: "Client",
        image: smallrooms, // Use the imported local image
      },
    ];
  
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-gray-900">
          What Our Fantastic Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#B7D1DA] bg-opacity-40 p-6 rounded-lg mb-8 relative">
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
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
                  <h3 className="font-serif text-xl text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  