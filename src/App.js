import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect } from 'react';
import Genesis from './components/Genesis';
import 'bootstrap/dist/css/bootstrap.min.css';
import BackToTop from './components/BackToTop';
import MyPreloader from './components/MyPreloader';
import MyNavBar from './components/MyNavBar';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <>
      <BackToTop />
      <MyPreloader />
      <React.Fragment>
        <Routes>
          <Route path='/' element={<MyNavBar />} />
          <Route path='/Genesis' element={<Genesis />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
