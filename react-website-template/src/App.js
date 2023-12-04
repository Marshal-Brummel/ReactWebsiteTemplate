import React from 'react';

import { Footer, WelcomeContainer } from  './container';
import { Navbar, HeroBanner} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <HeroBanner fullscreen={true} imgURL="https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/c550dd40-3a7c-4330-b4a0-6c3d70b7ceeb/header-st-patrick-s-cathedral-dublin-city.jpg?w=1280&h=480&fm=jpg&fit=crop" text="~ The Saint Patrick Curriculum* ~
Catholic, classical materials and training for PK - 8 teachers and schools "/>
      <WelcomeContainer />
      <Footer />
    </div>
  )
}

export default App