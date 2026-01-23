import Link from "next/link";

const TopHeaderOne: React.FC = () => {
  return (
    <div className='bg-main-600 tw-py-205 z-1 '>
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-3 justify-content-between flex-wrap'>
          <div className='d-md-block d-none'>
            <div className='d-flex align-items-center tw-gap-6 flex-wrap '>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-semibold'>
                  <i className='ph-bold ph-headset' />
                </span>
                <span className='text-dark-600 fw-semibold tw-text-lg'>
                  24/7 hours support
                </span>
              </div>
              <div className='d-flex align-items-center gap-2 flex-wrap'>
                <span className='tw-text-xl text-dark-600 fw-semibold'>
                  <i className='ph-bold ph-envelope-simple' />
                </span>
                <span className='text-dark-600 fw-semibold'>
                  Contact@rapidloanlink.com
                </span>
              </div>
            </div>
          </div>
          <div className='top-header-item d-flex align-items-center tw-gap-15 flex-wrap'>
            <div>
              <ul className='d-flex align-items-center tw-gap-5 flex-wrap'>
                <li>
                  <Link
                    href='#'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-fill ph-twitter-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-facebook-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-linkedin-logo' />
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='tw-text-xl text-dark-600'
                  >
                    <i className='ph-bold ph-behance-logo' />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
