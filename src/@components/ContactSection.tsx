import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

interface IProps {
  className?: string;
}
const ContactSection: React.FC<IProps> = ({ className = '' }) => {
  const [isLoading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await fetch(`api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const { success, message, description } = await res.json();

      if (success) {
        reset();
        setLoading(false);
        return swal({
          title: message,
          text: description,
          icon: 'success',
        });
      } else {
        setLoading(false);
        return swal({
          title: message,
          text: description,
          icon: 'error',
        });
      }
    } catch (error) {
      setLoading(false);
      return swal({
        title: 'Something is wrong',
        text: error.message || error.toString(),
        icon: 'error',
      });
    }
  };
  return (
    <section id="contact" className={`contact_section ${className}`}>
      <div className="container">
        <div className="lg:flex">
          <div className="contact_thumb hidden lg:block">
            <img src="/images/contact_thumb.jpg" alt="contact thumb" />
          </div>
          <div className="contact_from_area lg:flex-1">
            <div className="section_meta">
              <h1 className="section_title">Get A Free Qoute</h1>
            </div>

            <form className="contact_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form_item w-full ">
                <input
                  type="text"
                  placeholder="Write your name*"
                  {...register('name', { required: true })}
                />
                {errors.name && <p>Name is required.</p>}
              </div>
              <div className="form_item">
                <input
                  type="email"
                  placeholder="Write  your email*"
                  {...register('email', { required: true })}
                />
                {errors.email && <p>Email is required.</p>}
              </div>

              <div className="form_item">
                <textarea
                  placeholder="Write your message*"
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && <p>Message is required.</p>}
              </div>

              <div className="text-right">
                <button
                  disabled={isLoading}
                  className={
                    isLoading
                      ? 'primary_btn opacity-30'
                      : 'primary_btn opacity-100'
                  }
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
