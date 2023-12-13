// ./app/layout.tsx

import React from 'react';
import { css } from '@emotion/styled';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'universe Portfolio',
  description: 'This is my portfolio',
};

const containerStyles = css`
  /* Common styles for all screen sizes */

  /* Media query for screens smaller than 600px */
  @media only screen and (max-width: 600px) {
    /* Styles for small screens go here */
  }

  /* Media query for screens between 600px and 1200px */
  @media only screen and (min-width: 601px) and (max-width: 1200px) {
    /* Styles for medium screens go here */
  }

  /* Media query for screens larger than 1200px */
  @media only screen and (min-width: 1201px) {
    /* Styles for large screens go here */
  }
`;

const RootLayout: React.FC = ({ children }) => (
  <html lang="en">
    <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden ${containerStyles}`}>
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
      <style jsx global>{`
        /* Your global styles go here */
      `}</style>
    </body>
  </html>
);

export default RootLayout;
