import Image from "next/image";

import ContactForm from "./client_form/ContactForm";

const ContactInner: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140 '>
      <div className='container'>
        <div className='row gy-4 tw-mb-15'>
          <div className='col-lg-6 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={800}>
              <div className='bg-white tw-py-10 tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <span className='tw-w-72-px tw-h-72-px bg-base-two-600 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600'>
                  <i className='ph ph-envelope-simple-open' />
                </span>
                <div className='text-center'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white'>
                    Email Us Anytime
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white '>
                    info@rapidloanlink.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6'>
            <div className='group' data-aos='fade-up' data-aos-duration={1000}>
              <div className='bg-white tw-py-10 tw-rounded-xl group-hover-bg-base-two-600 tw-duration-500'>
                <span className='tw-w-72-px tw-h-72-px bg-base-two-600 tw-text-8 text-white d-flex align-items-center justify-content-center tw-mb-6 rounded-circle mx-auto group-hover-bg-white tw-duration-500 group-hover-text-base-two-600'>
                  <i className='ph ph-map-pin' />
                </span>
                <div className='text-center'>
                  <h4 className='fw-normal text-dark-600 tw-mb-2 tw-duration-500 group-hover-text-white'>
                    Our Location
                  </h4>
                  <span className='fw-normal tw-text-lg text-dark-500 tw-duration-500 group-hover-text-white '>
                     360 Edge Lane, Fairfield, Liverpool,England, L7 9NJ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='bg-white tw-px-10 tw-py-10 tw-rounded-xl'
          data-aos='zoom-in'
          data-aos-duration={1500}
        >
          <div className='tw-mb-12 text-center'>
            <div className='d-flex align-items-center tw-gap-1 tw-mb-3 justify-content-center'>
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600'>Get In Touch</h5>
            </div>
            <h3 className='fw-normal text-dark-600 cursor-big'>
              Let’s Start A Conversation
            </h3>
          </div>

          {/* ContactForm */}
          <ContactForm />
        </div>

      </div>
    </section>
  );
};

export default ContactInner;
