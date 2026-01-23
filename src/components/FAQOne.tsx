import Image from "next/image";

const FAQOne: React.FC = () => {
  return (
    <section className='py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='max-w-856 justify-content-center mx-auto'>
          <div className='tw-mb-12'>
            <div
              className='d-flex align-items-center justify-content-center text-center tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <span>
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon2.png'
                  alt='Image'
                />
              </span>
              <h5 className='text-primary-600 fw-normal cursor-big'>Faq</h5>
            </div>
            <div className='max-w-560 text-center justify-content-center align-items-center mx-auto'>
              <h2
                className='fw-normal text-dark-600 tw-mb-4 cursor-big'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                Frequently Asked Questions
              </h2>
              <p
                className='fw-normal tw-text-lg text-dark-500'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Browse our comprehensive FAQ section for clear, concise answers
                to your most common banking queries.
              </p>
            </div>
          </div>
          <div className='tw-mb-80-px'>
            <ul
              className='nav nav-pills nav-faq mb-3 align-items-center tw-gap-6'
              id='pills-tab-two'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3 active'
                  id='pills-homeeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-homeeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-homeeee'
                  aria-selected='true'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img1.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    General Questions
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-mobileeee-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-mobileeee'
                  type='button'
                  role='tab'
                  aria-controls='pills-mobileeee'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img2.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Credit
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-transferrrr-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-transferrrr'
                  type='button'
                  role='tab'
                  aria-controls='pills-transferrrr'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img3.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Process
                  </span>
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link nav-link-three w-100 tw-px-5 tw-py-6 text-center rounded-3'
                  id='pills-feessss-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-feessss'
                  type='button'
                  role='tab'
                  aria-controls='pills-feessss'
                  aria-selected='false'
                >
                  <span className='tw-mb-5 group-hover-item-text-invert tw-transition-04-secend d-block'>
                    <Image
                      width={48}
                      height={48}
                      src='/assets/images/icon/faq-img4.png'
                      alt='Image'
                      className='faq-img'
                    />
                  </span>
                  <span className='faq-text fw-medium tw-text-lg text-dark-500 group-hover-text-white tw-transition-04-secend d-block'>
                    Fees
                  </span>
                </button>
              </li>
              
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent-two'>
            <div
              className='tab-pane fade show active'
              id='pills-homeeee'
              role='tabpanel'
              aria-labelledby='pills-homeeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-one'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                     What is RapidLoanLink?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        RapidLoanLink helps you access fast, reliable loans through a simple online process. We focus on transparency, clear terms, and getting funds to you quickly without unnecessary hassle.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What is a loan?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                       A loan is a sum of money you can borrow for everyday expenses or unexpected needs. At RapidLoanLink, loan amounts range from $100 to $5,000, repaid in easy monthly installments.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree1'
                      aria-expanded='false'
                      aria-controls='collapseThree1'
                    >
                     How much can I borrow?
                    </button>
                  </h2>
                  <div
                    id='collapseThree1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        You can request any amount between $100 and $5,000. The exact amount approved depends on your income, credit profile, and eligibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour1'
                      aria-expanded='false'
                      aria-controls='collapseFour1'
                    >
                      Are loans available in my state?
                    </button>
                  </h2>
                  <div
                    id='collapseFour1'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-one'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Loan availability may vary by state due to regulations. Once you submit your application, we’ll show you the options that are available where you live.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOnee'
                      aria-expanded='true'
                      aria-controls='collapseOnee'
                    >
                      Can I qualify for a loan?
                    </button>
                  </h2>
                  <div
                    id='collapseOnee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        To qualify, you must be at least 18 years old, have a valid checking account, a permanent U.S. address, and a steady source of income.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-mobileeee'
              role='tabpanel'
              aria-labelledby='pills-mobileeee-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-two'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOnee'
                      aria-expanded='true'
                      aria-controls='collapseOnee'
                    >
                     Does applying affect my credit?
                    </button>
                  </h2>
                  <div
                    id='collapseOnee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                       We start with a soft credit check to show you available loan options — this won’t impact your credit score. A hard credit check may only be done by the lender when you accept a loan, and it will appear on your credit report.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoo'
                      aria-expanded='false'
                      aria-controls='collapseTwoo'
                    >
                      Can I still get a loan with a low credit score?
                    </button>
                  </h2>
                  <div
                    id='collapseTwoo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-two'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Yes! We review applications from all credit profiles. Your credit history is just one factor; we also consider income, employment stability, and overall financial situation to determine approval and terms.
                      </p>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-transferrrr'
              role='tabpanel'
              aria-labelledby='pills-transferrrr-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-three'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneee'
                      aria-expanded='true'
                      aria-controls='collapseOneee'
                    >
                      How will I receive my loan funds?
                    </button>
                  </h2>
                  <div
                    id='collapseOneee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        After completing our simple online application and getting approved, your loan amount is sent directly to your bank account, often within one business day.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwooo'
                      aria-expanded='false'
                      aria-controls='collapseTwooo'
                    >
                      How fast can I get my loan?
                    </button>
                  </h2>
                  <div
                    id='collapseTwooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Many applicants see loan options within minutes. Once approved, funds are usually available the same day or by the next business day.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree3'
                      aria-expanded='false'
                      aria-controls='collapseThree3'
                    >
                      When do I need to repay my loan?
                    </button>
                  </h2>
                  <div
                    id='collapseThree3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                       Loan repayments are set up as automatic monthly deductions from your checking account on the agreed date, making it simple and stress-free.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour3'
                      aria-expanded='false'
                      aria-controls='collapseFour3'
                    >
                      What happens if I miss a payment?
                    </button>
                  </h2>
                  <div
                    id='collapseFour3'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-three'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        If a payment is missed or delayed, contact us as soon as possible. We can help you adjust your repayment plan or provide guidance to minimize any extra fees.                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-feessss'
              role='tabpanel'
              aria-labelledby='pills-feessss-tab'
              tabIndex={0}
            >
              <div className='accordion' id='accordionExample-four'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOneeee'
                      aria-expanded='true'
                      aria-controls='collapseOneeee'
                    >
                     Will I have to pay any fees or interest?
                    </button>
                  </h2>
                  <div
                    id='collapseOneeee'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Loan fees and interest vary depending on your loan amount and lender terms. All charges are clearly shown upfront, so there are no hidden costs.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-neutral-10 border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big position-relative z-2'>
                    <button
                      className='accordion-button collapsed bg-neutral-10 rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwoooo'
                      aria-expanded='false'
                      aria-controls='collapseTwoooo'
                    >
                      Can I repay my loan early?
                    </button>
                  </h2>
                  <div
                    id='collapseTwoooo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample-four'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Yes! You can pay off your loan before the due date without any penalties. Early repayment may help you save on interest and finish your loan faster.
                        Play.
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

export default FAQOne;
