import PageWrapper from '@components/PageWrapper';
import Link from 'next/link';
import React from 'react';

const Custom404 = () => {
  return (
    <PageWrapper title={`404 not found - Manik Trade  International`}>
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="pt-20 text-center">
            <h4 className="text-3xl mb-4">Page Not Found</h4>
            <p className="text-primary mb-8">
              We’re unable to find a page you are looking for, Try later or
              click the button.
            </p>
            <div className="primary-btn mx-auto">
              <Link href="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Custom404;
