import React from 'react';

interface IProps {
  className?: string;
}
const HeroSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section className={`hero_section ${className}`}>
      <div className="container">
        <div className="hero_wrapper">
          <h2 className="hero_subtitle">Business Machines premium reseller</h2>
          <h1 className="hero_title pb-4">Prapti Computer.</h1>
          <p className="hero_text">
            Laptop and personal computer solutions. Whole sale and retail
            merchant.
          </p>
          <div className="mt-8">
            <a className="primary_btn" href="#about">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
