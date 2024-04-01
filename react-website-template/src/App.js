import React from 'react';

import { Blog, Footer, WelcomeContainer } from  './container';
import { Admin, Editor, Home, Pricing } from './pages';
import { Navbar } from './components';
import './App.css';

const App = () => {
  let page;
  switch (window.location.pathname) {
    case '/': 
      page = <WelcomeContainer/>;
      break;
    case '/content': 
      page = <Blog/>;
      break;
    case '/skills': 
      page = <Home/>;
      break;
    case '/pedagogy': 
      page = <Pricing/>; 
      break;
    case '/admin': 
      page = <Admin/>; 
      break;
    case '/editor': 
      page = <Editor/>; 
      break;
  }
  return (
    <div className='App'>
      <Navbar />
      {page}
      <Footer />
    </div>
  )
}

export default App