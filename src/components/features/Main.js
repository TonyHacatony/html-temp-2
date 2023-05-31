import React from 'react';
import { Button, Img } from '../utils/Common';

function Main() {
  return (
    <div className='max-w-container mx-auto flex flex-col
      mob-container:px-7
      mobile:[&>*:not(:last-child)]:mx-[27px]
      mobile:[&>*:not(:last-child)]:my-[20px]
      md:h-[650px] md:pt-[100px]'>
      <h1 className='text-[48px] font-chester leading-[36px]
        md:text-[66px] md:leading-[64px] md:w-[570px]'>We create your space better</h1>

      <span className='pt-[] md:pt-[32px] md:w-[382px]'>
        Our team creates comfortable spaces for our clients. We've been designing your everyday life and work through great ideas since 1999.
      </span>
      <Button className={'md:mt-[54px]'}>GET STARTED</Button>
      <Img className='md:hidden m-0 h-[249px]'
        src={'/images/bg_first_section.jpg'}
        name={'example of work'}
      />
    </div>
  );
}

export default Main;
