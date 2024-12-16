import React from 'react';

interface IProps {
  className?: string;
}
const ElementorSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section className={`elementor_section ${className}`}>
      <div className="container">
        <div className="elementor_wrapper">
          <div className="elementor_item">
            <div className="elementor_icon">
              <img src="/images/elementor_icon1.svg" alt="elementor icon" />
            </div>
            <h2 className="elementor_title">Fast Delivery</h2>
            <p>
              West & East Bangladesh delivery within 24 to 72 hours, Our expert delivery
              team is always devoted to our valuable customers.
            </p>
          </div>
          <div className="elementor_item">
            <div className="elementor_icon">
              <img src="/images/elementor_icon2.svg" alt="elementor icon" />
            </div>
            <h2 className="elementor_title">Lifetime Warranty</h2>
            <p className="text_primary">
              Most of our products come with reliable warranty and after sales
              service
            </p>
          </div>
          <div className="elementor_item">
            <div className="elementor_icon">
              <img src="/images/elementor_icon3.svg" alt="elementor icon" />
            </div>
            <h2 className="elementor_title">Certified ExpErts</h2>
            <p>
              Our certified expert team is always ready to provide custom
              solutions for your business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ElementorSection;
