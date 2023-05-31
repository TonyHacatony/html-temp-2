import React, { useState } from 'react';
import { MoreBtn } from '../utils/Common';

function About() {
  const [isFull, setFull] = useState(false);

  const toggle = () => setFull(e => !e);

  return (
    <div className={`h-auto bg-clr_light_gray md:h-[385px]`}>
      <div className='h-full mx-auto max-w-container flex
      container:px-[30px]
      md:items-center md:pr-[100px]
      mobile:flex-col mobile:pt-[58px]'>
        <h2 className='mobile:mb-[28px]'>
          About <br />
          <span className='text-clr_orange'>
            Studio
          </span>
        </h2>
        <span className='md:ml-auto md:w-[570px]'>
          Interiart is an award-winning architecture and interior design practice based in NYC. We work internationally on projects of residential & commercial interior design that require a creative approach. Our talented and experienced designers leverage their knowledge and expertise to create unique and comfortable interiors for you.
          <span className={`${isFull ? '' : 'hidden'}`}>
            <br /><br />
            Our team knows that interior design can be stressful for the client and we do our best to make it as easy as possible. We listen to your needs, ideas, and inputs. And most importantly, we make it exciting and enjoyable for our clients.
          </span>
        </span>
        <MoreBtn
          className={'my-[28px] self-start md:hidden'}
          onClick={toggle}
        >READ MORE</MoreBtn>
      </div>
    </div>
  );
}

export default About;
