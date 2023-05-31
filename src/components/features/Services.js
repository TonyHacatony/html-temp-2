import React from 'react';
import { Button, Img } from '../utils/Common';

const ServiceCard = ({ src, head, desc }) => {
  return (
    <div className='flex flex-col justify-center align-middle items-center w-[270px] 
    container:mx-auto'>
      <Img className={'h-[80px] w-[80px] pb-2 lg:pb-4'} src={src} name={head} />
      <span className='font-semibold text-[18px]
      pb-2 lg:pb-4'>
        {head}
      </span>
      <span className='text-clr_gray'>
        {desc}
      </span>
    </div>
  );
}

function Services() {
  return (
    <div className='max-w-container mx-auto h-auto py-[40px]
      flex flex-col items-center justify-between
      md:py-[80px] md:gap-y-[84px]'>
      <h2>Our <span className='text-clr_orange '>Services</span></h2>
      <div className='flex mob-container:flex-wrap 
      mobile:flex-col mobile:[&>*:not(:last-child)]:border-b
      mobile:[&>*:not(:last-child)]:py-[50px]
      mobile:[&>*:last-child]:pt-[50px]
      mobile:[&>*:last-child]:pb-[34px]'>
        <ServiceCard
          src={'/images/services/icon.svg'}
          head={'INTERIOR DESIGN'}
          desc={"Interior design services offer a vast variety of solutions for our clients' homes and offices."}
        />
        <ServiceCard
          src={'/images/services/icon-1.svg'}
          head={'DECORATIVE SERVICES'}
          desc={"Our professional decorators will be happy to help you change your house's inner look."}
        />
        <ServiceCard
          src={'/images/services/icon-2.svg'}
          head={'SPACE PLANNING'}
          desc={"We create better interior experiences through our space planning services."}
        />
        <ServiceCard
          src={'/images/services/icon-3.svg'}
          head={'PROJECT MANAGEMENT'}
          desc={"We provide proper project management as it's one of the main success factors in interior design."}
        />
      </div>
      <Button className={'mobile:hidden'}>
        FREE CONSULATION
      </Button>
    </div>
  );
}

export default Services;
