import React from "react";
import Image from "next/image";

const BeforeYouApplyContent: React.FC = () => {
  return (
    <section className='py-120 overflow-hidden'>
      <div className='container container-two'>
        <div className='row justify-content-center'>
          <div className='col-xl-9 col-lg-10'>
            {/* Header Section */}
            <div
              className='text-center mb-12'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='d-flex align-items-center justify-content-center gap-2 mb-4'>
                <div className='tw-w-2 tw-h-8 bg-primary-600 rounded'></div>
                <h6 className='fw-semibold text-primary-600 mb-0'>IMPORTANT INFORMATION</h6>
              </div>
              <h1 className='fw-bold text-dark-600 mb-5 display-5'>
                Important Things to Know Before You Apply
              </h1>
              <div className='max-w-703 mx-auto'>
                <p className='fw-medium tw-text-xl text-dark-500 mb-0'>
                  Taking out a loan is a serious financial decision. Before you accept any loan offer, 
                  make sure you understand how it works and what could happen if you don't follow the loan terms.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className='before-apply-content'>
              {/* Section 1: Late or Missed Payments */}
              <div 
                className='apply-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='apply-section-number tw-w-12 tw-h-12 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-danger-600'>01</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>If You Pay Late or Miss Payments</h2>
                  </div>
                </div>

                <div className='row align-items-start'>
                  <div className='col-lg-8'>
                    <div className='mb-5'>
                      <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                        When you accept a loan, you agree to pay it back according to the terms in your agreement. 
                        Missing payments can have serious consequences.
                      </p>
                      
                      <div className='mb-5'>
                        <h5 className='fw-semibold text-dark-600 mb-3'>You agree to repay:</h5>
                        <div className='row gy-3'>
                          <div className='col-md-4'>
                            <div className='bg-neutral-50 tw-p-4 rounded-3 text-center h-100'>
                              <div className='tw-w-10 tw-h-10 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3'>
                                <i className='ph ph-calendar-check tw-text-5 text-primary-600'></i>
                              </div>
                              <h6 className='fw-semibold text-dark-600 mb-1'>On Time</h6>
                              <p className='fw-normal tw-text-sm text-dark-500 mb-0'>According to schedule</p>
                            </div>
                          </div>
                          <div className='col-md-4'>
                            <div className='bg-neutral-50 tw-p-4 rounded-3 text-center h-100'>
                              <div className='tw-w-10 tw-h-10 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3'>
                                <i className='ph ph-currency-dollar tw-text-5 text-primary-600'></i>
                              </div>
                              <h6 className='fw-semibold text-dark-600 mb-1'>With Interest</h6>
                              <p className='fw-normal tw-text-sm text-dark-500 mb-0'>As per agreement</p>
                            </div>
                          </div>
                          <div className='col-md-4'>
                            <div className='bg-neutral-50 tw-p-4 rounded-3 text-center h-100'>
                              <div className='tw-w-10 tw-h-10 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3'>
                                <i className='ph ph-list-checks tw-text-5 text-primary-600'></i>
                              </div>
                              <h6 className='fw-semibold text-dark-600 mb-1'>As Scheduled</h6>
                              <p className='fw-normal tw-text-sm text-dark-500 mb-0'>By the lender's terms</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='alert alert-danger bg-danger-50 border-danger-200 border-start-0 border-end-0 border-2 rounded-0 tw-px-0'>
                        <div className='d-flex align-items-start gap-3'>
                          <i className='ph ph-warning-octagon tw-text-5 text-danger-600 mt-1'></i>
                          <div>
                            <h5 className='fw-semibold text-dark-600 mb-2'>Late or missed payments may result in:</h5>
                            <div className='row g-3'>
                              <div className='col-md-4'>
                                <div className='d-flex align-items-center gap-2'>
                                  <i className='ph ph-plus-circle tw-text-4 text-danger-600'></i>
                                  <span className='fw-medium text-dark-600'>Late Fees</span>
                                </div>
                              </div>
                              <div className='col-md-4'>
                                <div className='d-flex align-items-center gap-2'>
                                  <i className='ph ph-plus-circle tw-text-4 text-danger-600'></i>
                                  <span className='fw-medium text-dark-600'>Penalties</span>
                                </div>
                              </div>
                              <div className='col-md-4'>
                                <div className='d-flex align-items-center gap-2'>
                                  <i className='ph ph-plus-circle tw-text-4 text-danger-600'></i>
                                  <span className='fw-medium text-dark-600'>Additional Interest</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-lg-4'>
                    <div className='bg-light border-start border-3 border-primary-600 tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-info tw-text-5 text-primary-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-0'>Important Note</h5>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        <span className='text-primary-600 fw-bold'>Rapid Loan Link is not a lender</span>, and we do not control loan fees, 
                        penalties, or repayment rules. Always read the lender's loan agreement carefully.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Credit Score Impact */}
              <div 
                className='apply-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='apply-section-number tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-success-600'>02</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>How Your Credit Score May Be Affected</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-5'>
                    Lenders may check your credit to decide whether to offer you a loan. 
                    Understanding the difference between credit checks is important.
                  </p>

                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='bg-success-50 border border-success-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-check-circle tw-text-5 text-success-600'></i>
                          </div>
                          <div>
                            <h5 className='fw-bold text-dark-600 mb-1'>Soft Credit Check</h5>
                            <span className='badge bg-success-100 text-success-600 fw-medium'>No Impact on Credit Score</span>
                          </div>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-check tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Used for initial application review</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-check tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Does not affect your credit score</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-check tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Helps show loan options</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className='col-lg-6'>
                      <div className='bg-warning-50 border border-warning-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-warning-circle tw-text-5 text-warning-600'></i>
                          </div>
                          <div>
                            <h5 className='fw-bold text-dark-600 mb-1'>Hard Credit Check</h5>
                            <span className='badge bg-warning-100 text-warning-600 fw-medium'>May Affect Credit Score</span>
                          </div>
                        </div>
                        <ul className='list-unstyled mb-4'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-arrow-right tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Used when moving forward with loan</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-arrow-right tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Can affect your credit score</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-arrow-right tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Done before final approval</span>
                          </li>
                        </ul>
                        
                        <div className='alert alert-danger bg-danger-50 border-danger-200 p-3 rounded-2'>
                          <div className='d-flex align-items-start gap-2'>
                            <i className='ph ph-warning-octagon tw-text-5 text-danger-600 mt-1'></i>
                            <p className='fw-medium text-dark-600 mb-0'>
                              Missing or late payments can also hurt your credit score and stay on your credit report.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Debt Collection */}
              <div 
                className='apply-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='apply-section-number tw-w-12 tw-h-12 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-purple-600'>03</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Debt Collection</h2>
                  </div>
                </div>

                <div className='row align-items-center'>
                  <div className='col-lg-8'>
                    <div className='mb-5 mb-lg-0'>
                      <div className='d-flex align-items-start gap-4 mb-4'>
                        <div className='flex-shrink-0'>
                          <div className='tw-w-16 tw-h-16 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center'>
                            <i className='ph ph-prohibit tw-text-7 text-purple-600'></i>
                          </div>
                        </div>
                        <div>
                          <h4 className='fw-bold text-dark-600 mb-3'>
                            Rapid Loan Link does not collect payments and does not handle debt collection.
                          </h4>
                          <p className='fw-normal tw-text-lg text-dark-600'>
                            If you do not repay your loan, the lender may contact you to collect the debt. 
                            The lender's collection rules will be explained in your loan agreement.
                          </p>
                        </div>
                      </div>
                      
                      <div className='bg-light tw-p-5 rounded-3 border border-neutral-200'>
                        <div className='d-flex align-items-center gap-3 mb-3'>
                          <div className='tw-w-10 tw-h-10 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-phone-call tw-text-5 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Important Reminder</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-0'>
                          If you have questions about payments or collections, contact your lender directly. 
                          We are not involved in the collection process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='text-center'>
                      <div className='tw-w-48 tw-h-48 bg-purple-50 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                        <i className='ph ph-users-three tw-text-9 text-purple-600'></i>
                      </div>
                      <h6 className='fw-semibold text-dark-600 mb-2'>Collection Process</h6>
                      <p className='fw-normal text-dark-500 mb-0'>
                        Managed by lenders, not by Rapid Loan Link
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Funding Time */}
              <div 
                className='apply-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1100}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='apply-section-number tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-info-600'>04</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>How Long It Takes to Get Your Money</h2>
                  </div>
                </div>

                <div className='mb-5'>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-5'>
                    If a lender approves your loan, the time it takes to receive funds can vary based on several factors.
                  </p>

                  <div className='row g-4 mb-5'>
                    <div className='col-md-4'>
                      <div className='bg-info-50 tw-p-5 rounded-3 text-center h-100'>
                        <div className='tw-w-14 tw-h-14 bg-info-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                          <i className='ph ph-buildings tw-text-6 text-info-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-2'>The Lender</h5>
                        <p className='fw-normal text-dark-600 mb-0'>
                          Each lender has different processing times and procedures
                        </p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='bg-info-50 tw-p-5 rounded-3 text-center h-100'>
                        <div className='tw-w-14 tw-h-14 bg-info-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                          <i className='ph ph-credit-card tw-text-6 text-info-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-2'>Your Bank</h5>
                        <p className='fw-normal text-dark-600 mb-0'>
                          Bank processing times and policies affect transfer speed
                        </p>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='bg-info-50 tw-p-5 rounded-3 text-center h-100'>
                        <div className='tw-w-14 tw-h-14 bg-info-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                          <i className='ph ph-calendar-check tw-text-6 text-info-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-2'>Timing Factors</h5>
                        <p className='fw-normal text-dark-600 mb-0'>
                          Approval day, time, and business days impact funding
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='alert alert-warning bg-warning-50 border-warning-200 p-4 rounded-3'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-clock-countdown tw-text-5 text-warning-600 mt-1'></i>
                      <div>
                        <h5 className='fw-bold text-dark-600 mb-2'>Funding Timeline Notice</h5>
                        <p className='fw-normal text-dark-600 mb-0'>
                          <span className='fw-bold'>Rapid Loan Link does not control funding times.</span> 
                          Funding speed varies by lender and individual circumstances. 
                          Some lenders may offer same-day funding, while others may take several business days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Our Role */}
              <div 
                className='apply-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='apply-section-number tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-primary-600'>05</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Our Role</h2>
                  </div>
                </div>

                <div className='mb-5'>
                  <div className='text-center mb-6'>
                    <h3 className='fw-bold text-dark-600 mb-3 display-6'>
                      Rapid Loan Link helps connect you with lenders — we do not provide loans.
                    </h3>
                    <p className='fw-normal tw-text-xl text-dark-500 max-w-703 mx-auto'>
                      We are a loan referral service, not a direct lender. All lending decisions and 
                      terms come directly from the lender.
                    </p>
                  </div>

                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='bg-light tw-p-6 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-prohibit tw-text-5 text-danger-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0'>What We Don't Do</h4>
                        </div>
                        
                        <div className='mb-4'>
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-x tw-text-4 text-danger-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1'>We do not decide who gets approved</h5>
                              <p className='fw-normal text-dark-600 mb-0'>Approval decisions are made by lenders</p>
                            </div>
                          </div>
                          
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-x tw-text-4 text-danger-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1'>We do not set loan terms</h5>
                              <p className='fw-normal text-dark-600 mb-0'>Terms are determined by individual lenders</p>
                            </div>
                          </div>
                          
                          <div className='d-flex align-items-start gap-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-x tw-text-4 text-danger-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1'>We do not control interest rates or fees</h5>
                              <p className='fw-normal text-dark-600 mb-0'>All financial terms are lender-specific</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='col-lg-6'>
                      <div className='bg-primary-50 tw-p-6 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-check-circle tw-text-5 text-primary-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0 h5-c'>What We Do</h4>
                        </div>
                        
                        <div className='mb-4'>
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-check tw-text-4 text-primary-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1 h5-c'>Connect you with lenders</h5>
                              <p className='fw-normal text-dark-600 mb-0 h5-c h5-c'>We help you find potential lending partners</p>
                            </div>
                          </div>
                          
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-check tw-text-4 text-primary-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1 h5-c'>Simplify the process</h5>
                              <p className='fw-normal text-dark-600 mb-0 h5-c'>We make finding loan options easier</p>
                            </div>
                          </div>
                          
                          <div className='d-flex align-items-start gap-3'>
                            <div className='tw-min-w-6 tw-h-6 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                              <i className='ph ph-check tw-text-4 text-primary-600'></i>
                            </div>
                            <div>
                              <h5 className='fw-semibold text-dark-600 mb-1 h5-c'>Provide resources</h5>
                              <p className='fw-normal text-dark-600 mb-0 h5-c'>We offer educational information</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-dark-600 tw-p-6 tw-p-lg-8 rounded-4'>
                  <div className='text-center'>
                    <div className='tw-w-16 tw-h-16 bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                      <i className='ph ph-handshake tw-text-7 text-primary-600'></i>
                    </div>
                    <h4 className='fw-bold text-white mb-3'>
                      All loan decisions and terms come directly from the lender.
                    </h4>
                    <p className='fw-normal text-white opacity-75 mb-0'>
                      We are here to help you get started, but final approval and loan details 
                      are determined by the lending partners we connect you with.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div 
              className='text-center mt-10'
              data-aos='fade-up'
              data-aos-duration={1300}
            >
              <div className='bg-primary-50 tw-p-6 rounded-4 border border-primary-200'>
                <h4 className='fw-bold text-dark-600 mb-3 h5-c'>Ready to Apply?</h4>
                <p className='fw-normal tw-text-lg text-dark-600 mb-4 max-w-506 mx-auto h5-c'>
                  Now that you understand the important details, you're ready to proceed with confidence.
                </p>
                <a 
                  href='/apply-loan'
                  className='btn btn-primary btn-lg fw-semibold tw-px-6 tw-py-3'
                >
                  Start Your Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeYouApplyContent;