import React from 'react';
import services from '@lib/json/services.json';

interface IProps {
  className?: string;
}
const ServiceSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section id="services" className={`service_section ${className}`}>
      <div className="container">
        <div className="section_meta mb-8">
          <div className="section_meta text-center">
            <h1 className="section_title has_line">Service We Offer</h1>
            <p className="text_primary mx-auto max-w-[700px]">
              Trustworthy name for all Laptop and Personal Computer products
            </p>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services?.map((item) => (
            <div key={item.title} className="service_item">
              <div className="service_icon">
                <img src={item.icon} alt="service icon" />
              </div>
              <h3 className="service_title">{item.title}</h3>
              <p className="service_description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
