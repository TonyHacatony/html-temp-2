import React, { useState } from 'react';
import { Img, Logo } from '../utils/Common';

const slides = [
  [
    'Annette Black', 'Merchandising Associate',
    'Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.',
    '/images/people/img.png'
  ],
  [
    'Marvin McKinney', 'Administrator',
    'Leo viverra vestibulum amet, scelerisque. Vitae, ultrices mi rhoncus porttitor nulla sed sodales. Curabitur tellus massa, lacinia non at. Lacus, hac fermentum, viverra tortor, eget. Eget egestas eget ultrices vitae.',
    '/images/people/img-1.png'
  ],

  [
    'Annette Black1', 'Merchandising Associate',
    'Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.',
    '/images/people/img.png'
  ],
  [
    'Marvin McKinney1', 'Administrator',
    'Leo viverra vestibulum amet, scelerisque. Vitae, ultrices mi rhoncus porttitor nulla sed sodales. Curabitur tellus massa, lacinia non at. Lacus, hac fermentum, viverra tortor, eget. Eget egestas eget ultrices vitae.',
    '/images/people/img-1.png'
  ],

  [
    'Annette Black2', 'Merchandising Associate',
    'Convallis non proin ac bibendum. At pharetra sed ultrices semper. Lectus et ornare ultrices urna in. Id non fringilla dignissim ac risus amet eget egestas vestibulum. Aliquet etiam eget nulla nulla odio vel.',
    '/images/people/img.png'
  ],
  [
    'Marvin McKinney2', 'Administrator',
    'Leo viverra vestibulum amet, scelerisque. Vitae, ultrices mi rhoncus porttitor nulla sed sodales. Curabitur tellus massa, lacinia non at. Lacus, hac fermentum, viverra tortor, eget. Eget egestas eget ultrices vitae.',
    '/images/people/img-1.png'
  ],
];


const Slider = ({ limit }) => {

  const [pageIndex, setPageIndex] = useState(0);

  const pages = slides.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / limit);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, [])


  const Slide = ({ arr }) => {

    const ColorBackgroundLine = () => <div className='absolute border-b border-clr_line_gray top-[107px] md:top-[130px] w-full z-[-1]' />;

    const [name, prof, desc, src] = arr;
    return (
      <div className='border relative z-0 bg-white rounded-lg
      mobile:mx-[30px]
      md:h-[400px] md:w-[570px]
      '>
        <ColorBackgroundLine />
        <div className='icon_with_text
        flex pt-[25px] pl-[24px]
        md:pt-[36px] md:pl-[91px]
        ult_sm:flex-col
        '>
          <Img className={`
          h-[128px] w-[128px]
          md:h-[172px] md:w-[172px]
          `}
            src={src} name={name} />
          <div className='flex flex-col
          pl-[15px]
          md:pl-[35px]
          '>
            <span className='font-gilroy-medium
            pt-[12px] pb-[7px]
            md:text-[20px] md:pt-[30px]
            '>
              {name}
            </span>
            <span className='font-gilroy-medium text-clr_gray
            pb-[20px]
            md:text-[20px] md:pb-[38px]
            '>
              {prof}
            </span>
            <div className='flex gap-x-[8px]'>
              <Logo src={'/icons/twitter.svg'} name={'twitter'}></Logo>
              <Logo src={'/icons/linkedn.svg'} name={'linkedn'}></Logo>
              <Logo src={'/icons/facebook.svg'} name={'facebook'}></Logo>
            </div>
          </div>
        </div>
        <div className='
        px-[24px] pt-[36px]
        mobile:pb-[34px]
        md:pl-[100px] md:pr-[70px] md:pt-[30px]
        '>{desc}</div>
      </div>
    );
  }

  const SliderProgress = ({ pages, currentIndex, setPage }) => {

    const Round = ({ isCurrent, onClick }) => <div className={`h-[14px] w-[14px] rounded-full 
    ${isCurrent ? 'bg-clr_orange' : 'bg-[#DFDFDF]'}`}
      onClick={onClick}
    />

    return (
      <div className='flex gap-x-[10px] self-center mobile:pt-[46px]'>
        {pages.map((_, index) => <Round key={index}
          isCurrent={index === currentIndex}
          onClick={() => setPage(index)}
        />)}
      </div>
    );
  }

  return (
    <div className='slider
    flex flex-col justify-between
    h-auto mt-[54px]
    md:w-full md:h-[456px] md:mt-[87px] md:mx-[30px]
    '>
      <div className='images flex h-fit w-full justify-between
      container:justify-center
      '>
        {pages[pageIndex].map((arr, i) => {
          if (i >= limit) return <></>;
          return <Slide arr={arr} />;
        })}
      </div>
      <SliderProgress
        pages={pages}
        currentIndex={pageIndex}
        setPage={setPageIndex}
      />
    </div>
  );
}

function PeopleSay({ width }) {

  const findLimit = (width) => {
    if (!Number(width)) return 1;
    if (width > 1169) return 2;
    return 1;
  }

  return (
    <div className='h-auto bg-clr_light_gray flex flex-col justify-between
    mobile:pt-[58px] mobile:pb-[38px]
    md:h-[693px] md:py-[60px]
    container:justify-center
    '>
      <div className='h-full w-full mx-auto max-w-container flex flex-col items-center'>
        <h2>
          What&nbsp;
          <span className='text-clr_orange'>
            People Say
          </span>
        </h2>
        <Slider limit={findLimit(width)} />
      </div>
    </div>
  );
}

export default PeopleSay;
