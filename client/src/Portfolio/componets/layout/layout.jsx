// layout.jsx
import React from 'react';
import Header from './../header/landing/header';
import Footer from '../footer/footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div id="contentContainer">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
