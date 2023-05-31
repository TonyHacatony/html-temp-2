import React from 'react';
import { Button } from '../utils/Common';

function QuestionForm() {
  return (
    <div className='
    flex justify-evenly max-w-container m-auto h-auto
    mobile:flex-col mobile:py-[47px] mobile:gap-y-[35px]
    md:h-[228px] md:gap-x-[337px]
    [&>*]:m-auto 
    '>
      <h2 className=''>
        Do you have <br />
        <span className='text-clr_orange'>
          any question?
        </span>
      </h2>
      <Button>ORDER A CALL</Button>
    </div>
  );
}

export default QuestionForm;
