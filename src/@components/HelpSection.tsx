import React from 'react';

interface IProps {
  className?: string;
}
const HelpSection: React.FC<IProps> = ({ className = '' }) => {
  return (
    <section className={`help_section ${className}`}>
      <div className="container">
        <div className="help_wrapper">
          <h1 className="help_title">
            We can be reached via Mobile call or contact form
          </h1>
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-8   items-center justify-center">
            <p className="text-[#fff] text-lg leading-4 font-semibold">
              +880 1776187745
            </p>
            <span className="h-[1px] sm:h-[60px] w-full sm:w-[1px] bg-[#807e7e]"></span>
            <div className="">
              <p className="text-[#fff] text-lg font-semibold">
                Operation hour
              </p>
              <p className="text-[#fff] text-lg leading-4 font-semibold">
                10 am - 10 pm
              </p>
            </div>
          </div>
          <div className="mt-8">
            <a
              className="block text-[#fff] text-lg font-semibold"
              href="mailto:motiarrahman9707@gmail.com"
            >
              motiarrahman9707@gmail.com
            </a>
            <a className="primary_btn block mt-2" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HelpSection;
