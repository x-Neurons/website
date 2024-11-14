import { features } from "../constants";

const Services = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="services">
      <div className="text-center">
        <span className="bg-neutral-900 text-teal-200 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Services
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our{" "}
          <span className="bg-gradient-to-r  from-teal-300 to-teal-300 text-transparent bg-clip-text">
            Services
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20 justify-center mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex w-full h-48 justify-center">  
            <img
              src={feature.img}
              alt="Service Image"
              className="w-80 h-full object-cover"
            />
            </div>
            <div className="flex">
              <div className="text-center">
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
