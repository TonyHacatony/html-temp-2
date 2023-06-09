import React, { useState } from 'react';
import { Img, EmptyLink } from '../utils/Common';

const Link = ({ name }) => {
  return (
    <EmptyLink
      className={`w-full h-full block
      font-gilroy-medium hover:text-clr_orange`}
      href="#"
    >{name}</EmptyLink>
  );
}

const BurgerMenuBtn = ({ className, onClick }) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`} onClick={onClick}>
      <span className="block w-4 h-0.5 bg-clr_menu self-end"></span>
      <span className="block w-8 h-0.5 bg-clr_menu"></span>
      <span className="block w-4 h-0.5 bg-clr_menu"></span>
    </div>
  );
}

export default function Header() {
  const [isShow, setShow] = useState(false);

  const toggle = () => setShow(visible => {
    const newValue = !visible;
    const newClassName = (document.body.classname ?? '') + (newValue ? ' no_scroll' : '');
    document.body.className = newClassName;
    return newValue;
  });

  return (
    <header className={`max-w-container m-auto w-full flex
    mob-container:px-7 mob-container:h-[60px]
    md:h-[100px] md:[&>*]:my-auto
    mobile:flex-col mobile:[&>*]:py-6
    ${isShow ? 'mobile:bg-white mobile:fixed mobile:inset-0 z-50' : ''}
    `}>
      <div className={`flex justify-between`}>
        <EmptyLink className={'mobile:pl-[27px]'}><h2>id Studio</h2></EmptyLink>
        <BurgerMenuBtn className={`p-4 md:hidden mobile:fixed mobile:right-0`} onClick={toggle} />
      </div>

      <nav className={`mobile:mx-auto md:my-auto md:pl-12 lg:pl-16 ${isShow ? '' : 'mobile:hidden'}`}>
        <ul className='flex gap-x-12
        mobile:flex-col mobile:gap-y-4 mobile:gap-x-0'>
          <li>
            <Link name={'Services'} />
          </li>
          <li>
            <Link name={'Portfolio'} />
          </li>
          <li>
            <Link name={'Pricing'} />
          </li>
        </ul>
      </nav>
      <div className={`flex ml-auto self-end items-center
      md:gap-x-11 md:my-auto
      mobile:flex-col mobile:m-0 mobile:self-center 
      mobile:gap-y-4 mobile:gap-x-0 mobile:items-center
      ${isShow ? '' : 'mobile:hidden'}`}>
        <span className={`font-gilroy-medium`}>+(303) 555-0105</span>
        <div className={`flex font-gilroy-medium gap-x-2`}>
          EN
          <Img src={'/icons/arrow_down.svg'} name={'arrow_down'} />
        </div>
      </div>
    </header>
  );
}
