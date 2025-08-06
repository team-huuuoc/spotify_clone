import React from 'react';
import {Button} from "@/components/ui/button";
import {banner, blackStart, calvin, gucci, prada, versase, znra} from "@/assets/imgs";

const Banner = () => {
  return (
    <div className={"w-full relative overflow-hidden"}>
      <div className={"-full w-full bg-cover bg-center z-0"}>
        <img src={banner} alt={"banner"}/>
        <div className={"absolute inset-0 flex flex-col justify-center gap-6 px-5 md:px-16 z-10"}>
          <p className={"text-black dark:text-white font-bold text-[40px] md:text-[64px] max-w-[800px] font-integral"}>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <p className={"text-[rgba(0,0,0,0.6)] dark:text-white text-[16px] leading-[12px] font-normal font-inter max-w-[600px]"}>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <Button variant={"default"} color={"default"} className={"rounded-full h-[52px] w-fit"}>
            Shop Now
          </Button>
          <div className={"grid grid-cols-1 sm:grid-cols-3 mt-4 gap-6"}>
            <div className={"flex gap-16 border-r border-t-black"}>
              <div className={"flex flex-col"}>
                <p className={"text-black font-inter dark:text-white text-[30px] md:text-[40px] font-bold leading-normal"} style={{fontSize: "clamp(24px, 2vw, 30px)"}}>
                  200+
                </p>
                <p style={{fontSize: "clamp(12px, 2vw, 14px)"}} className={"text-[rgba(0,0,0,0.6)] dark:text-white text-[14px] md:text-[16px] leading-[12px] font-normal font-inter"}>
                  International Brands
                </p>
              </div>

              <div className={"flex flex-col"}>
                <p className={"text-black dark:text-white font-inter text-[40px] font-bold leading-normal"} style={{fontSize: "clamp(24px, 2vw, 30px)"}}>
                  2,000+
                </p>
                <p style={{fontSize: "clamp(12px, 2vw, 14px)"}} className={"text-[rgba(0,0,0,0.6)] dark:text-white text-[16px] leading-[12px] font-normal font-inter"}>
                  High-Quality Products
                </p>
              </div>

              <div className={"flex flex-col"}>
                <p className={"text-black dark:text-white font-inter text-[40px] font-bold leading-normal"} style={{fontSize: "clamp(24px, 2vw, 30px)"}}>
                  30,000+
                </p>
                <p style={{fontSize: "clamp(12px, 2vw, 14px)"}} className={"text-[rgba(0,0,0,0.6)] dark:text-white text-[16px] leading-[12px] font-normal font-inter"}>
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-10 p-24">
            <img
                src={blackStart}
                alt='blackStart'
                className=' h-[120px]'
            />
          </div>

        <div className="absolute top-96 left-1/2 transform -translate-x-1/2 z-10 p-4">
          <img
              src={blackStart}
              alt='blackStart'
              className=' h-[60px]'
          />
        </div>

        </div>
        <div className="w-full bg-black py-8">
          <div className="flex justify-around items-center">
            <div className='w-[166.48px]'>
              <img
                  src={versase}
                  alt='versace'
                  className=' h-[120px]'
              />
            </div>
            <div className='w-[91px]'>
              <img
                  src={znra}
                  alt='zara'
                  className=' h-[120px]'
              />
            </div>
            <div className='w-[156px]'>
              <img
                  src={gucci}
                  alt='gucci'
                  className=' h-[120px]'
              />
            </div>
            <div className='w-[120px]'>
              <img
                  src={prada}
                  alt='prada'
                  className=' h-[120px]'
              />
            </div>
            <div className='w-[206.79px]'>
              <img
                  src={calvin}
                  alt='calvin'
                  className=' h-[120px]'
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;

