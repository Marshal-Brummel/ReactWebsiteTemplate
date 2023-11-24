import React from 'react';

import { Footer, Blog, Possibility, Features, WhatTemplate, Header } from  './container';
import { CTA, Brand, Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatTemplate />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App