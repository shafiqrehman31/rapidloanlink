import CounterView from "@/helper/CounterView";
import Image from "next/image";

const OurFeatureOne: React.FC = () => {
  return (
    <>
      <section className='py-140 z-1 overflow-hidden'>
        <div className='container'>
          <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap tw-mb-80-px'>
            <div className='max-w-526'>
              <div
                className='d-flex align-items-center tw-gap-1 tw-mb-3'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt='Image'
                />
                <h5 className='text-primary-600 fw-normal'> Welcome to Rapid Loan Link</h5>
              </div>
              <h2
                className='fw-normal text-dark-600 h3 cursor-big'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Fast and Stress-Free Loan Solutions
              </h2>
            </div>
            <div className='max-w-400'>
              <p
                className='fw-normal tw-text-lg text-dark-500'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
              At <b>Rapid Loan Link</b>, we help you access fast and reliable loan options without the stress. Our process is built to be simple, secure, and transparent.
                
              </p>
            </div>
          </div>
          <div className='row gy-4 align-items-center'>
            <div className='col-lg-5'>
              <div className='max-w-416'>
                <div
                  className='tw-mb-12'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <span className='tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6'>
                    <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center'>
                      <Image
                        width={40}
                        height={40}
                        src='/assets/images/icon/our-feature-icon1.png'
                        alt='Image'
                      />
                    </span>
                  </span>
                  <h5 className='fw-normal text-dark-600 tw-mb-2 cursor-big'>
                    Fast Approvals
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Apply online and receive quick decisions without long waiting times.
                  </p>
                </div>
                <div
                  className='tw-mb-12'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <span className='tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6'>
                    <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center'>
                      <Image
                        width={40}
                        height={40}
                        src='/assets/images/icon/our-feature-icon2.png'
                        alt='Image'
                      />
                    </span>
                  </span>
                  <h5 className='fw-normal text-dark-600 tw-mb-2 cursor-big'>
                   Flexible Loan Amounts
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    Borrow anywhere from $100 up to $5,000, based on your needs.
                  </p>
                </div>
                <div className='' data-aos='fade-up' data-aos-duration={1200}>
                  <span className='tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6'>
                    <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center'>
                      <Image
                        width={40}
                        height={40}
                        src='/assets/images/icon/our-feature-icon3.png'
                        alt='Image'
                      />
                    </span>
                  </span>
                  <h5 className='fw-normal text-dark-600 tw-mb-2 cursor-big'>
                    Simple Online Process
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                    No complicated steps everything is handled digitally and securely.
                  </p>
                </div>
                  <div className='' data-aos='fade-up' data-aos-duration={1400}>
                  <span className='tw-w-72px tw-h-72-px border-base-two-600 d-flex align-items-center justify-content-center rounded-3 tw-mb-6'>
                    <span className='w-15 h-15 bg-base-two-10 rounded-3 d-flex align-items-center justify-content-center'>
                      <Image
                        width={40}
                        height={40}
                        src='/assets/images/icon/our-feature-icon3.png'
                        alt='Image'
                      />
                    </span>
                  </span>
                  <h5 className='fw-normal text-dark-600 tw-mb-2 cursor-big'>
                   Funds Sent Directly
                  </h5>
                  <p className='fw-normal tw-text-lg text-dark-500'>
                   Approved loan amounts are transferred straight to your bank account.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='position-relative'>
                <div>
                  <Image
                    width={746}
                    height={705}
                    src='/assets/images/thumbs/our-feature.png'
                    alt='Image'
                    data-aos='zoom-in'
                    data-aos-duration={1200}
                  />
                </div>
                <div
                  className='our-feature__card-one bg-white tw-w-232-px tw-h-116-px position-absolute top-0 tw-start-0 border-bottom-right-24-px'
                  data-aos='fade-right'
                  data-aos-duration={1000}
                >
                  <div className='our-feature-card-three max-w-219 bg-warning-500 rounded-3 tw-px-6 tw-py-5 d-flex align-items-center tw-gap-4 position-absolute inset-inline-start-0 inset-block-start-0'>
                    <Image
                      width={54}
                      height={54}
                      src='/assets/images/shape/our-feature-shape1.png'
                      alt='Image'
                      data-aos-duration={800}
                    />
                    <div>
                      <h3 className='fw-normal text-dark-600 mb-0 cursor-big counter'>
                        {/* CounterView */}
                        <CounterView start={0} end={45} title='K+' />
                      </h3>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        Success rate
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className='our-feature__card-two tw-w-200-px tw-h-150-px position-absolute bottom-0 tw-end-0 bg-white border-top-left-24-px'
                  data-aos='fade-left'
                  data-aos-duration={1000}
                >
                  <div className='our-feature-card-four max-w-176 bg-main-600 rounded-3 tw-px-6 tw-py-5 position-absolute inset-block-end-0 inset-inline-end-0'>
                    <div>
                      <h3 className='fw-normal text-dark-600 mb-1 cursor-big counter'>
                        {/* CounterView */}
                        <CounterView start={0} end={75} title='K' />
                      </h3>
                      <span className='fw-normal tw-text-lg text-dark-500'>
                        Daily Payments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeatureOne;
