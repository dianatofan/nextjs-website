import React from "react";

import ScrollProgressBar from '@/components/ScrollProgressBar';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

export default ({ location, children }) => {

  return (
    <div className="flex flex-col items-center">
      <ScrollProgressBar />
      <Header location={location} />
      {children}
      <Footer />
    </div>
  );
};
