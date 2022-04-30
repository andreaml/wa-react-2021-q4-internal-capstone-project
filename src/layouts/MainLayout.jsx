import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MainLayout() {
  return (
    <>
      <Header />
      {/* An <Outlet> renders whatever child route is currently active  */}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
