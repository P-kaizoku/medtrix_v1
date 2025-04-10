import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React from "react";

type providerType = {
  title: String;
  content: String;
};

const Provider = ({ title, content }: providerType) => {
  return (
    <div className="h-[340px]  flex flex-col space-y-4 bg-neutral-100 rounded-lg">
      <h2 className="text-3xl font-medium text-center mt-10 text-wrap">
        Join as a {title}
      </h2>
      <p className="my-2 text-xl text-center w-1/2 mx-auto">{content}</p>
      <div className="w-full flex items-center justify-center mt-8">
        <button className="mx-auto bg-white px-4 py-2 font-medium border-1 border-black/80 rounded-xl text-lg hover:bg-black hover:text-white transition-colors duration-500">
          Register {title}
        </button>
      </div>
    </div>
  );
};

const ProviderCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <Provider
            title="Pharmacy"
            content="Connect with local customers and manage your inventory smartly."
          />
        </CarouselItem>
        <CarouselItem>
          <Provider
            title="Clinic/Hospital"
            content="Provide seamless service and stay connected with nearby pharmacies and labs"
          />
        </CarouselItem>
        <CarouselItem>
          <Provider
            title="Diagnostic Center"
            content="Enable quicker test bookings and reporting thorugh our unified network."
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProviderCarousel;
