import React from 'react';

export const IconLink = (props) => {
  const className = props.className;
  return (
    <a className={`h-fit w-fit ${className ?? ''}`} href='#' onClick={e => e.preventDefault()}>
      <Img {...props}></Img>
    </a>
  );
}

export const Img = ({ className, name, src }) => {
  return (
    <img
      className={`${className ? className : ''}`}
      src={src}
      alt={name}
      title={name}
    />
  );
}

export const Logo = ({ src, name }) => <IconLink className={'h-5 w-5'} src={src} name={name}></IconLink>;

export const EmptyLink = ({ children, className }) => <a
  href="#"
  className={className}
  onClick={e => e.preventDefault()}
>{children}</a>;

export const Button = ({ children, className }) => {
  return (
    <button className={`font-bold border-2 rounded-lg border-clr_orange md:h-fit md:w-fit 
        px-[34px] py-[12px] ${className}`}>
      {children}
    </button>
  );
}

//my-[28px] self-start md:hidden

export const MoreBtn = ({ className, onClick, children }) => {
  return (
    <button className={`border-b-2 border-b-clr_orange 
      font-semibold w-fit mobile:text-sm ${className}`}
      onClick={onClick}
    >{children}</button>
  );
}
