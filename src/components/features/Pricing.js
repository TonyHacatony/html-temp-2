import React from 'react';
import { Button } from '../utils/Common';

const PriceCard = ({ name, price, arr }) => {

  const SmallText = ({ children }) =>
    <span className='text-[14px] md:text-[15px]'>{children}</span>

  return (
    <div className='flex flex-col items-center w-[270px]
    border-2 border-clr_orange rounded-lg
    h-auto pt-[27px] gap-y-[35px]
    md:h-[448px] md:py-[32px] md:gap-y-[54px]
    '>
      <div className='flex flex-col'>
        <span className='font-chester 
          text-[20px] pb-[33px]
          md:text-[24px] md:pb-[31px]
        '>{name}</span>
        <span className='flex md:flex-col pb-[27px] 
          mobile:gap-x-4'>
          <span className='font-chester text-[44px] 
            mobile:text-[28px]'>{price}$</span>
          <span className='font-chester text-[18px] 
            mobile:text-[16px] mobile:text-clr_gray'>per month</span>
        </span>
        <div className='mb-[27px] border-b' />
        <span className='flex flex-col'>
          {arr.map(a => <SmallText>{a}</SmallText>)}
        </span>
      </div>
      <Button className={'mobile:hidden'}>BUY NOW</Button>
      <button className='md:hidden border-t-2 border-clr_orange
      bg-clr_orange text-white
      self-stretch font-bold py-[12px]'
      >BUY NOW</button>
    </div>
  );
}

function Pricing() {
  return (
    <div className='h-auto max-w-container mx-auto text-center flex flex-col
    py-[35px]
    md:py-[102px]
    container:px-[30px]
      '>
      <h2 className='pb-[47px] md:pb-[80px]'>Our <span className='text-clr_orange '>Pricing</span></h2>
      <div className='flex gap-x-[82px] justify-center
        container:gap-x-[20px]
        mobile:flex-col mobile:items-center mobile:gap-y-[30px]'>
        <PriceCard
          name={'Basic'}
          price={'25'}
          arr={['Interior Design', 'Project Discussion', 'Space Planning', 'Online Consultation']}
        />
        <PriceCard
          name={'Standart'}
          price={'50'}
          arr={['Color Analysis', 'Space Planning', 'Home Remodeling', '3D Interior Model']}
        />
        <PriceCard
          name={'Premium'}
          price={'80'}
          arr={['Concept Development', 'Decoration Services', 'Interior Architecture', 'Flooring Installation']}
        />
      </div>
    </div>
  );
}

export default Pricing;
