import React, { useEffect, useState } from 'react';
import { Button, Img, MoreBtn } from '../utils/Common';

// const photos = [
//   { src: '/images/products/img.png' },
//   { src: '/images/products/img-1.png' },
//   { src: '/images/products/img-2.png' },
//   { src: '/images/products/img-3.png' },
//   { src: '/images/products/img-4.png' },
//   { src: '/images/products/img-5.png' },
//   { src: '/images/products/img-6.png' },
//   { src: '/images/products/img-7.png' },
// ];

// const FilterBtn = ({ children, className = '' }) => <button className={`mobile:text-[13px] ${className}`}>{children}</button>;
// const Photo = (props) => {
//   const { className } = props;
//   return (
//     <Img
//       {...props}
//       className={`w-[270px] h-[320px] ${className}`}
//     ></Img>
//   );
// }
// const Images = ({ limit }) => {
//   return (
//     <div className='flex gap-x-[30px] gap-y-[20px] flex-wrap
//     container:justify-evenly
//     mobile:flex-col mobile:items-center mobile:gap-x-0'>
//       {photos.map((val, i) => {
//         if (i >= limit) return <></>;
//         return <Photo src={val.src}></Photo>;
//       })}
//     </div>
//   );
// }

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
