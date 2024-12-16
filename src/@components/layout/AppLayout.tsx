import React from 'react';
import Head from 'next/head';
import AppFooter from './elements/AppFooter';
import AppHeader from './elements/AppHeader';
import BackToTop from './elements/BackToTop';

interface IFProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<IFProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Prapti Computer.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Laptop and personal computer solutions. Whole sale and retail merchant."
        />
      </Head>
      <AppHeader />
      <main className="app-content" role="main">
        {children}
      </main>
      <AppFooter />
      <BackToTop />
    </React.Fragment>
  );
};

export default AppLayout;
