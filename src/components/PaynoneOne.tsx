import Image from "next/image";

const PaynoneOne: React.FC = () => {
  return (
    <section className='z-1 bg-neutral-10 py-140 position-relative overflow-hidden'>
      <div className='container'>
        <div className='paynone-item margin-block-start-60px'>
          <div className='text-center justify-content-center align-items-center'>
            <h2
              className='fw-normal text-dark-600 tw-mb-3 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              WHY RapidLoanLink
            </h2>
            <p
              className='max-w-322 text-dark-500 tw-text-lg fw-normal mx-auto'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              Fast, simple, and reliable loans when you need them
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-one max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start--120px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Fast & Easy Loan Process
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  Apply online in just a few minutes for loans ranging from $100 to $5,000.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-two max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start--45px margin-block-start-200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <Image
                  width={78}
                  height={78}
                  src='/assets/images/icon/payone-img2.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                 Clear & Transparent Terms
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                 No hidden fees, no surprises. We provide clear loan terms upfront so you always know what to expect before accepting your loan.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-three max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-block-start--200px margin-inline-start-100px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <Image
                  width={80}
                  height={80}
                  src='/assets/images/icon/payone-img1.png'
                  alt='Image'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                 Your Security Comes First
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                  We protect your personal and financial information using secure technology, giving you peace of mind throughout the process.
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-four max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start-70px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                Flexible Loan Options
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                  From small expenses to unexpected costs, our loans are designed to give you access to funds whenever you need them.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaynoneOne;
