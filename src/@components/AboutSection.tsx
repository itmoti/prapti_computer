import React from 'react';

interface IProps {
  className?: string;
}
const AboutSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section id="about" className={`about_section ${className}`}>
      <div className="container">
        <div className="grid items-center gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="about_thumb hidden lg:block">
            <img src="/images/about_thumb.jpg" alt="about thumb" />
          </div>
          <div className="about_content">
            <div className="section_meta">
              <h1 className="section_title has_line line_left">About Us</h1>
            </div>

            <p className="text_primary mb-4">
              Prapti Computer. has been founded on 2015. From then
              to now, Prapti Computer. has won the heart of many
              people and now is a country-wide renowned brand. That has been
              possible due to the hard work of Prapti Computer. has
              done to satisfy its customers.
            </p>
            <p className="text_primary">
              Having the aim to satisfy customers, providing customers with
              their required products, and being true to their motto, “Customers
              Come First,” has brought Prapti Computer. to the top
              of the Computer and Technology product retailers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
