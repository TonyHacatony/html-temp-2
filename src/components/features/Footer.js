import React from 'react';
import { EmptyLink, Logo } from '../utils/Common';

const Contact = ({ head, text }) => {
  return (
    <div className='flex flex-col justify-start'>
      <span className='text-clr_gray font-medium'>{head}</span>
      <span className='text-sm'>{text}</span>
    </div>
  );
}

const NavLink = ({ children }) => <EmptyLink className='text-sm'>{children}</EmptyLink>

export default function Footer() {
  return (
    <footer className={`h-auto bg-clr_light_gray
    `}>
      <div className='h-full max-w-container m-auto 
      grid grid-cols-3 
      pb-6 pt-14 gap-y-16
      container:px-7
      md:gap-x-[150px]'>
        <h2 className='mobile:col-span-2
      md:order-1'>id Studio</h2>
        <div className='mobile:hidden md:order-4'>
          We are one of the leading interior design and remodeling studios available for all of your residential and commercial interior design needs.
        </div>
        <div className='flex gap-2 md:order-6'>
          <Logo src={'/icons/twitter.svg'} name='twitter'></Logo>
          <Logo src={'/icons/linkedn.svg'} name='linkedn'></Logo>
          <Logo src={'/icons/facebook.svg'} name='facebook'></Logo>
        </div>
        <div className='[&>*:not(:last-child)]:pb-5 flex flex-col
      mobile:col-span-3 mobile:hidden
      md:order-2 md:row-span-2'>
          <div className='font-semibold'>NAVIGATION</div>
          <NavLink>About</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Testemonials</NavLink>
        </div>
        <div className='[&>*:not(:last-child)]:pb-8 
      mobile:col-span-3
      md:row-span-3 md:order-3 md:ml-auto'>
          <div className='font-semibold pb-8 md:pb-6'>CONTACTS</div>
          <div className='[&>*:not(:last-child)]:pb-8 md:[&>*:not(:last-child)]:pb-12 '>
            <Contact head={'ADRESS'} text={'3517 W. Gray St. Utica, Pennsylvania 57867'} />
            <Contact head={'EMAIL'} text={'michelle.rivera@idstudio.com'} />
            <Contact head={'PHONES'} text={'(808) 555-0111 or (303) 555-0105'} />
          </div>
        </div>
        <span className='mobile:col-span-3 md:order-5'>©  2021 id Studio. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
