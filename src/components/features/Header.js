import React, { useState } from 'react';
import { Img, EmptyLink } from '../utils/Common';

const Link = ({ name }) => {
  return (
    <EmptyLink
      className={`w-full h-full block
      font-gilroy-medium hover:bg-clr_orange`}
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

// const HiddenForm = () => {
//   const [isOpen, setOpen] = useState(false);
//   const formRef = useRef(null);

//   const onClick = (e) => {
//     e.preventDefault();
//     setOpen(e => !e);
//   }

//   return (
//     <div className='md:hidden flex'>
//       <a onClick={onClick}>
//         <Img src='/icons/search.svg' name='search' />
//       </a>
//       <SearchForm ref={formRef} className={`absolute w-[calc(100%-16px)] left-[8px] z-50 transition-all
//           ${isOpen ? 'visible opacity-100 top-[120px]' : 'invisible opacity-0 top-0'}`} />
//     </div>
//   );
// }

// const SearchForm = forwardRef(({ className }, ref) => {
//   return (
//     <form ref={ref} className={`bg-[#FFFFFF] p-3 flex ${className ??= ''}`}>
//       <button type='submit'>
//         <Img
//           className={'h-[20px] w-[20px]'}
//           src={'/icons/search.svg'}
//           name={'search'}
//         />
//       </button>
//       <input className='w-full hover:outline-none focus:outline-none' autoComplete='off' type='text'></input>
//     </form>
//   );
// });

// const DropDown = ({ name, list }) => {
//   return (
//     <Menu as={'div'} className={'text-left font-gilroy-medium'}>
//       {({ close }) => (
//         <>
//           <Menu.Button className={'inline-flex'}>
//             {({ open }) => (
//               <>
//                 {name}
//                 <Img
//                   className={`ml-2 -mr-1 h-3.5 w-3.5 mt-1.5 ${open ? 'rotate-180' : ''} transition-all`}
//                   src={'/icons/arrow-down.svg'}
//                   name={'arrow_down'}
//                 />
//               </>
//             )}
//           </Menu.Button>
//           <Menu.Items as='ul' className='static md:absolute 
//           flex flex-col bg-clr_orange text-left p-4 [&>*:not(:last-child)]:pb-2'>
//             {list.map(item =>
//               <Menu.Item key={name} as='li'>
//                 <a
//                   className='hover:text-[#FFFFFF] transition-colors'
//                   href={`/${item}`}
//                   onClick={e => {
//                     e.preventDefault();
//                     close();
//                   }}
//                 >
//                   {item}
//                 </a>
//               </Menu.Item>
//             )}
//           </Menu.Items>
//         </>
//       )}
//     </Menu>
//   );
// }
