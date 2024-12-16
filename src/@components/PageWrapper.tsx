import React from 'react';
import Head from 'next/head';

interface IProps {
  children: React.ReactNode;
  title?: string;
}
const PageWrapper: React.FC<IProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>{title && <title>{title}</title>}</Head>

      {children}
    </React.Fragment>
  );
};

export default PageWrapper;
