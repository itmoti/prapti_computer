import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  useEffect(() => {
    const bnt: any = document.querySelector('.bact-to-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        bnt.classList.add('active');
      } else {
        bnt.classList.remove('active');
      }
    });
    if (window.scrollY > 100) {
      bnt.classList.add('active');
    }
  }, []);

  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleBackToTop} className="bact-to-top">
      <FaArrowUp />
    </button>
  );
};
export default BackToTop;
