import React from 'react';
import Hero from './Pages/Hero';
import Plagette from './Pages/Plagette';
import Gallary from './Pages/Gallary';
import Choose from './Pages/Choose';
import Amenities from './Pages/Amenities';
import Loaction from './Pages/Loaction';
import Payment from './Pages/Payment';

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
    </div>
  );
};

export default App;