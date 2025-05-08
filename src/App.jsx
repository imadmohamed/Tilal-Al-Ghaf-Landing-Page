import React from 'react';
import Hero from './Pages/Hero';
import Plagette from './Pages/Plagette';
import Gallary from './Pages/Gallary';
import Choose from './Pages/Choose';
import Amenities from './Pages/Amenities';
import Loaction from './Pages/Loaction';
import Payment from './Pages/Payment';
import Video from './Pages/Video';
import Brocher from './Pages/Brochure';
import Signup from './Pages/Signup';
import Register from './Pages/Register';

const App = () => {
  return (
    <div className=" overflow-x-hidden ">
      <Hero />
      <Plagette />
      <Gallary />
      <Choose />
      <Amenities />
      <Loaction />
      <Payment />
      <Video />
      <Brocher />
      <Signup />
      <Register />
    </div>
  );
};

export default App;