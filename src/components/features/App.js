import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import { Img } from '../utils/Common';
import Services from './Services';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import PeopleSay from './PeopleSay';
import QuestionForm from './QuestionForm';

const BgImage = () => {
  return (
    <Img className='mobile:hidden absolute h-[750px] right-0 -z-10'
      src={'/images/bg_first_section.jpg'}
      name={'example of work'}
    />
  );
}

function App() {

  const [width, setSize] = useState(0);

  useEffect(() => {
    if (width === 0) {
      setSize(window.innerWidth);
    }

    const checkSize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div className=''>
      <BgImage />
      <Header />
      <Main />
      <About />
      <Services />
      <Portfolio width={width}/>
      <Pricing />
      <PeopleSay width={width} />
      <QuestionForm />
      <Footer />
    </div>
  );
}
export default App;
