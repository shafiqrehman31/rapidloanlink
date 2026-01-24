import Image from "next/image";
import Link from "next/link";

const FooterOne: React.FC = () => {
  return (
    <footer className='tw-pt-250px bg-dark-600 z-1 overflow-hidden'>
      <div className='container'>
        <div className='tw-mb-80-px'>
          <div className='row gy-5'>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <div
                className='max-w-306'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <Link href='/'>
                  <Image
                    width={171}
                    height={40}
                    src='/assets/images/logo/logo.png'
                    alt='Image'
                    className='tw-mb-6'
                  />
                </Link>
                <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-8'>
                  Fast Loans, Clear Terms, Peace of Mind.
                </p>
                <ul className='d-flex align-items-center tw-gap-5'>
                  <li>
                    <a href='https://www.facebook.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-facebook-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://medium.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-medium-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://youtube.com'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-youtube-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://x.com/i/flow/login'>
                      <Image
                        width={48}
                        height={50}
                        src='/assets/images/icon/footer-twitter-logo.png'
                        alt='Image'
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div data-aos='fade-up' data-aos-duration={800}>
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Quick Links
                </h4>
                <ul>
                  <li className='tw-mb-4'>
                    <Link
                      href='/'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='tw-mb-4'>
                    <Link
                      href='/about-us'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      About Us
                    </Link>
                  </li>                 
                  <li className='tw-mb-4'>
                    <a
                      href='/faq'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      FAQ
                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <Link
                      href='/contact'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-6'>
              <div data-aos='fade-up' data-aos-duration={1000}>
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Important Links
                </h4>
                <ul>
                  <li className='tw-mb-4'>
                    <a
                      href='/terms-and-conditions'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                     Terms and Conditions

                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='/privacy-policy'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Privacy Policy

                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='/california-privacy'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      California Privacy Notice

                    </a>
                  </li>
                  <li className='tw-mb-4'>
                    <a
                      href='/before-you-apply'
                      className='fw-normal tw-text-lg text-neutral-10 hover-text-main-600'
                    >
                      Before you Apply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <div
                className='max-w-306'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <h4 className='text-white fw-normal tw-mb-10 cursor-big'>
                  Contact Us
                </h4>
                <p className='fw-normal tw-text-lg text-neutral-10 tw-mb-705'>
                  165 Broadway New York City NY 10006
                </p>
                <span className='tw-text-lg fw-normal text-neutral-10'>
                  info@rapidloanlink.com
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ================ botter footer section start ====================== */}
        <div className='tw-mb-10 border-top-dark-500 tw-pt-6'>
          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
            <p className='fw-semibold tw-text-lg text-white'>
              Copyright @ {new Date().getFullYear()} Rapid Loan Link
            </p>
            <span className='fw-semibold tw-text-lg text-white'>
              Designed By <span className='text-main-600'>Rapid Loan Link</span>
            </span>
          </div>
        </div>
        {/* ================ botter footer section end ====================== */}
      </div>
    </footer>
  );
};

export default FooterOne;
