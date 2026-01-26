import Image from "next/image";
import Link from "next/link";

const AboutInner: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-4 justify-content-between flex-wrap tw-mb-80-px'>
          <div className='max-w-703'>
            <div
              className='d-flex align-items-center tw-gap-1 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <Image
                width={27}
                height={27}
                src='/assets/images/icon/star-icon2.png'
                alt='Image'
              />
              <h5 className='fw-normal text-primary-600 '>About Us</h5>
            </div>
            <h2
              className='fw-normal text-dark-600 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              We have access to 100s of lenders and provide you the best available option suited to your needs
            </h2>
          </div>
          <div className='max-w-306'>
            <p
              className='fw-normal tw-text-lg text-dark-600 tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
             Apply online today and see how simple getting a loan can be with Rapid Loan Link.{" "}
            </p>
            <div
              className='max-w-181 position-relative'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <Link
                href='/contact'
                className='about-us-three-link bg-main-600 tw-px-5 tw-py-205 w-100 rounded-3 border-two-px-solid text-dark-600 fw-semibold hover-text-dark-600 '
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-5'>
            <div
              className='tw-px-8 tw-py-8 border-neutral-05 border rounded-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <h4 className='fw-normal text-dark-600 tw-mb-3'>
                Our Mission &amp; Values
              </h4>
              <p className='fw-normal tw-text-lg text-dark-500 tw-mb-8'>
                Our mission is to help people across the United States access reliable loan solutions without confusion or delays. We focus on transparency, speed, and convenience—so you always know what to expect at every step of the process.
              </p>
              <div className='tw-mb-8'>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                  Bad credit OK
                   {/** User-Friendly Mobile App*/} 
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                  Start online
                    {/**Secure Online Banking*/}
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                  Withdraw cash in Your A/c
                    {/**Personalized Financial Solutions */}
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                  Global Presence
                    {/**Assistance with Technical Issues */}
                  </span>
                </div>
                <div className='d-flex align-items-center tw-gap-2 tw-mb-3'>
                  <span className='tw-text-6 text-base-two-600'>
                    <i className='ph ph-check-circle' />
                  </span>
                  <span className='fw-normal tw-text-lg text-dark-600'>
                  Achieve Goal
                    {/**Assistance with Technical Issues */}
                  </span>
                </div>
              </div>
              <div className='position-relative max-w-155'>
                <Link
                  href='/aply-loan'
                  className='about-us-three-link tw-px-5 tw-py-205 bg-main-600 fw-semibold tw-text-lg text-base-two-600 rounded-3 border-two-px-solid'
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-3'>
            <Image
              width={306}
              height={444}
              src='/assets/images/thumbs/about-us-main.png'
              alt='Image'
              className='w-100 h-100'
              data-aos='fade-up'
              data-aos-duration={800}
            />
          </div>
          <div className='col-xl-4'>
            <div data-aos='fade-up' data-aos-duration={1000}>
              <div className='accordion' id='accordionExampleTwo'>
                <div className='accordion-item tw-mb-6 rounded-3 bg-main-600'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three bg-main-600 rounded-3 tw-text-xl text-dark-700 w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='true'
                      aria-controls='collapseFive'
                    >
                      What We Do
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-700'>
                       At Rapid Loan Link, we streamline the loan application process by keeping it simple and user-friendly. From submitting your request to receiving funds, everything is designed to save you time and effort. Loan amounts range from $100 to $5,000, making it easier to handle everyday needs and unexpected costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item tw-mb-6 rounded-3 bg-base-two-600'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-base-two-600 rounded-3 tw-text-xl text-white w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      Who We Are
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-white'>
                       Rapid Loan Link is an online platform built to make getting a loan simple, fast, and stress-free. We understand that unexpected expenses can happen at any time, which is why our goal is to provide quick access to loan options through a smooth and secure digital experience.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='accordion-item rounded-3 bg-warning-500'>
                  <h2 className='accordion-header cursor-big position-relative'>
                    <button
                      className='accordion-button-three collapsed bg-warning-500 rounded-3 text-dark-700 tw-text-xl w-100 tw-px-6 tw-py-6 text-start'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSeven'
                      aria-expanded='false'
                      aria-controls='collapseSeven'
                    >
                      Why We Exist
                    </button>
                  </h2>
                  <div
                    id='collapseSeven'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExampleTwo'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-700'>
                        Traditional borrowing can feel overwhelming. Complicated forms, long wait times, and unclear terms often create frustration. Rapid Loan Link was created to change that—offering a clear, online solution that puts control back in your hands.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInner;
