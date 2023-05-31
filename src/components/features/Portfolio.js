import React from 'react';
import { Img, MoreBtn } from '../utils/Common';

const photos = [
  { src: '/images/products/img.png' },
  { src: '/images/products/img-1.png' },
  { src: '/images/products/img-2.png' },
  { src: '/images/products/img-3.png' },
  { src: '/images/products/img-4.png' },
  { src: '/images/products/img-5.png' },
  { src: '/images/products/img-6.png' },
  { src: '/images/products/img-7.png' },
];

const FilterBtn = ({ children, className = '' }) => <button className={`mobile:text-[13px] ${className}`}>{children}</button>;
const Photo = (props) => {
  const { className } = props;
  return (
    <Img
      {...props}
      className={`w-[270px] h-[320px] ${className}`}
    ></Img>
  );
}
const Images = ({ limit }) => {
  return (
    <div className='flex gap-x-[30px] gap-y-[20px] flex-wrap
    container:justify-evenly
    mobile:flex-col mobile:items-center mobile:gap-x-0'>
      {photos.map((val, i) => {
        if (i >= limit) return <></>;
        return <Photo src={val.src} />;
      })}
    </div>
  );
}

function Portfolio({ width }) {

  const findLimit = (width) => {
    if (!Number(width)) return 3;
    if (width > 1169) return 8;
    if (width > 930) return 6;
    if (width > 767) return 4;
    return 3;
  }

  return (
    <div className='h-auto bg-clr_light_gray md:h-[988px] text-center'>
      <div className='h-full mx-auto max-w-container flex flex-col
      container:px-[30px]'>
        <h2 className='py-[47px] md:py-[80px]'>Our <span className='text-clr_orange '>Portfolio</span></h2>
        <div className='flex gap-x-4 pb-4
        mobile:flex-wrap mobile:justify-center'>
          <FilterBtn>ALL</FilterBtn>
          <FilterBtn>COMERCIAL</FilterBtn>
          <FilterBtn>RESIDENTIAL</FilterBtn>
          <FilterBtn>OFFICE</FilterBtn>
          <FilterBtn>OTHER</FilterBtn>
          <MoreBtn className={'ml-auto mobile:hidden'}>VIEW MORE</MoreBtn>
        </div>
        <Images limit={findLimit(width)} />
        <MoreBtn className={'my-[47px] self-center md:hidden'}>VIEW MORE</MoreBtn>
      </div>
    </div>
  );
}

export default Portfolio;
