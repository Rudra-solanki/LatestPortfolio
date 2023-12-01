import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';

function Home() {
  const handleSkypeClick = () => {
    // Open Skype link
    window.open('skype:live:.cid.bac16d02cd3e824a?chat');
  };

  const handleEmailClick = () => {
    // Compose email link
    window.location.href = 'mailto:solankirudra556@gmail.com';
  };

  return (
    <div className='px-4 grid grid-cols-2 sm:px-6 py-2 lg:px-24'>
      <div className=" py-20 grid gap-10 font-bold">
        <h2 className='text-4xl'>Hello I'm</h2>
        <h1 className='text-6xl'>RUDRA SOLANKI</h1>
        <h1 className='text-4xl'>a <span className='mx-2 text-5xl font-bold text-orange-600'>
        <Typewriter
            words={['Web-Developer', 'Designer', 'React-Developer', 'Animator']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          </span></h1>
          <div className="flex space-x-4">
      <button onClick={handleEmailClick} className="btn bg-orange-500 p-3 shadow-inner shadow-orange-200 text-orange-100 px-4 rounded">
        Hire Me
      </button>
      <button onClick={handleSkypeClick} className="btn bg-orange-500 p-3 shadow-inner shadow-orange-200 text-orange-100 px-4 rounded">
        Contact Me
      </button>
    </div>
      </div>
      <div className="">fd</div>
    </div>
  );
}

export default Home;
