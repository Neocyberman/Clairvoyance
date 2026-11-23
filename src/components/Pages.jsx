import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './Home';
import Layout from './Layout';
import AboutUs from './AboutUS.jsx';
import OtherInfo from './Otherinfo';

function Router_Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="other-info" element={<OtherInfo />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router_Example;
