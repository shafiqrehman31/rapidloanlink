import React from "react";
import Link from "next/link";

const PrivacyPolicyContent: React.FC = () => {
  return (
    <section className='py-120 overflow-hidden'>
      <div className='container container-two'>
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12'>
            {/* Header Section */}
            <div
              className='text-center mb-10'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div className='d-flex align-items-center justify-content-center gap-2 mb-4'>
                <div className='tw-w-2 tw-h-8 bg-primary-600 rounded'></div>
                <h6 className='fw-semibold text-primary-600 mb-0'>DATA PROTECTION</h6>
              </div>
              <h1 className='fw-bold text-dark-600 mb-4 display-5'>
                Privacy Policy
              </h1>
              <div className='d-flex align-items-center justify-content-center gap-4 mb-3'>
                <div className='d-flex align-items-center gap-2'>
                  <i className='ph ph-calendar-check tw-text-5 text-primary-600'></i>
                  <span className='fw-medium text-dark-600'>Effective Date: January 06, 2026</span>
                </div>
                <div className='d-flex align-items-center gap-2'>
                  <i className='ph ph-clock-countdown tw-text-5 text-primary-600'></i>
                  <span className='fw-medium text-dark-600'>Last Updated: January 06, 2026</span>
                </div>
              </div>
              <p className='fw-normal tw-text-lg text-dark-500 max-w-806 mx-auto'>
                Rapid Loan Link ("Company," "we," "us," or "our") operates a financial lead-generation platform
                that connects consumers seeking loan products with third-party lenders and financial service
                providers through a real-time distribution (ping-tree) model.
              </p>
            </div>

            <div className='alert alert-primary bg-primary-50 border-primary-200 tw-p-5 rounded-4 mb-8'>
              <div className='d-flex align-items-start gap-3'>
                <i className='ph ph-shield-check tw-text-6 text-primary-600 mt-1'></i>
                <div>
                  <h5 className='fw-bold text-dark-600 mb-2 h5-c'>Transparency Notice</h5>
                  <p className='fw-normal text-dark-600 mb-0 h5-c'>
                    This Privacy Policy explains how we collect, use, share, and protect personal information when you
                    visit www.rapidloanlink.com ("Website") or submit information through our forms.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='privacy-policy-content'>
              {/* Section 1: Our Role */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={700}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-danger-600'>01</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Our Role (Important Disclosure)</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='alert alert-warning bg-warning-50 border-warning-200 border-start-0 border-end-0 border-2 rounded-0 tw-px-0 mb-5'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-warning-octagon tw-text-6 text-warning-600 mt-1'></i>
                      <div>
                        <h4 className='fw-bold text-dark-600 mb-2'>We are not a lender and do not make credit decisions.</h4>
                        <p className='fw-normal text-dark-600 mb-0'>
                          We operate as a lead generator / marketplace that matches consumers with potential lenders and
                          financial partners.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='row g-4'>
                    <div className='col-lg-4'>
                      <div className='bg-neutral-50 tw-p-5 rounded-3 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-share-network tw-text-5 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Data Sharing</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Your data may be shared with multiple lenders or buyers through our platform.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-neutral-50 tw-p-5 rounded-3 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-gear-six tw-text-5 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Automated Distribution</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Distribution occurs via automated decisioning (ping-tree technology) to match you with lenders.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-neutral-50 tw-p-5 rounded-3 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-user-circle-gear tw-text-5 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Independent Evaluation</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Buyers may evaluate your eligibility independently based on their own criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Information We Collect */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={800}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-success-600'>02</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Information We Collect</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='row g-4 mb-5'>
                    <div className='col-lg-4'>
                      <div className='bg-success-50 border border-success-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-user-plus tw-text-5 text-success-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0'>Information You Provide</h4>
                        </div>
                        <p className='fw-normal text-dark-600 mb-4'>
                          When you submit a loan request or inquiry, we may collect:
                        </p>
                        <ul className='list-unstyled'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-user tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Full name</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-envelope-simple tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Email address</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-phone-call tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Phone number</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-buildings tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Mailing address</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-info-50 border border-info-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-monitor tw-text-5 text-info-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0'>Automatically Collected</h4>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-wifi-high tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>IP address</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-device-mobile tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Device and browser data</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-map-pin tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Geolocation (approximate)</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-calendar tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Time and date stamps</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-purple-50 border border-purple-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-users-three tw-text-5 text-purple-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0'>From Third Parties</h4>
                        </div>
                        <p className='fw-normal text-dark-600 mb-4'>
                          We may receive data from:
                        </p>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-megaphone-simple tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Affiliate publishers</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-handshake tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Marketing partners</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-shield-checkered tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Data verification services</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-shield-warning tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Fraud-prevention providers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className='bg-light tw-p-5 rounded-3 border border-neutral-200'>
                    <h5 className='fw-bold text-dark-600 mb-3'>Additional Information Collected</h5>
                    <div className='row g-3'>
                      <div className='col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-identification-card tw-text-5 text-primary-600'></i>
                          <span className='fw-normal text-dark-600'>Date of birth</span>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-currency-dollar tw-text-5 text-primary-600'></i>
                          <span className='fw-normal text-dark-600'>Loan amount requested</span>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-briefcase tw-text-5 text-primary-600'></i>
                          <span className='fw-normal text-dark-600'>Employment and income details</span>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-bank tw-text-5 text-primary-600'></i>
                          <span className='fw-normal text-dark-600'>Banking or financial indicators</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Ping-Tree Model */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-primary-600'>03</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>How the Ping-Tree Model Uses Your Data</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='row mb-5'>
                    <div className='col-lg-8'>
                      <div className='mb-4'>
                        <h4 className='fw-bold text-dark-600 mb-4'>Your information may be used as follows:</h4>
                        
                        <div className='process-step mb-4'>
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='flex-shrink-0'>
                              <div className='tw-w-10 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center'>
                                <span className='fw-bold tw-text-xl text-primary-600'>1</span>
                              </div>
                            </div>
                            <div>
                              <h5 className='fw-bold text-dark-600 mb-2'>Initial Evaluation (Ping)</h5>
                              <ul className='list-unstyled mb-0'>
                                <li className='d-flex align-items-start gap-2 mb-1'>
                                  <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Limited data is shared with multiple potential lenders</span>
                                </li>
                                <li className='d-flex align-items-start gap-2 mb-1'>
                                  <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Used to determine eligibility and pricing</span>
                                </li>
                                <li className='d-flex align-items-start gap-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>May occur simultaneously or sequentially</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className='process-step mb-4'>
                          <div className='d-flex align-items-start gap-3 mb-3'>
                            <div className='flex-shrink-0'>
                              <div className='tw-w-10 bg-success-100 rounded-circle d-flex align-items-center justify-content-center'>
                                <span className='fw-bold tw-text-xl text-success-600'>2</span>
                              </div>
                            </div>
                            <div>
                              <h5 className='fw-bold text-dark-600 mb-2'>Lead Delivery (Post)</h5>
                              <ul className='list-unstyled mb-0'>
                                <li className='d-flex align-items-start gap-2 mb-1'>
                                  <i className='ph ph-arrow-right tw-text-5 text-success-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Full application data is sent to one or more matched lenders</span>
                                </li>
                                <li className='d-flex align-items-start gap-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-success-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Based on eligibility, availability, and business rules</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className='process-step'>
                          <div className='d-flex align-items-start gap-3'>
                            <div className='flex-shrink-0'>
                              <div className='tw-w-10 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center'>
                                <span className='fw-bold tw-text-xl text-warning-600'>3</span>
                              </div>
                            </div>
                            <div>
                              <h5 className='fw-bold text-dark-600 mb-2'>Fallback Distribution</h5>
                              <ul className='list-unstyled mb-0'>
                                <li className='d-flex align-items-start gap-2 mb-1'>
                                  <i className='ph ph-arrow-right tw-text-5 text-warning-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>If one lender declines, your information may be shared with others</span>
                                </li>
                                <li className='d-flex align-items-start gap-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-warning-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Distribution may continue until a match is found or buyers are exhausted</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-primary-50 tw-p-5 rounded-4 h-100'>
                        <div className='text-center mb-4'>
                          <div className='tw-w-16 tw-h-16 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3'>
                            <i className='ph ph-git-branch tw-text-7 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-2 h5-c'>Ping-Tree Technology</h5>
                          <p className='fw-normal text-dark-600 h5-c'>
                            Our real-time distribution system efficiently matches you with the most suitable lenders.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: How We Use Information */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-info-600'>04</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>How We Use Your Information</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-users tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Match Consumers with Lenders</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Connect you with appropriate financial partners based on your needs
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-gear-six tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Operate & Optimize Systems</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Maintain and improve our lead-distribution platform
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-chats-circle tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Communicate With You</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Send updates and information regarding your request
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-shield-checkered tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Verify Identity & Detect Fraud</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Protect against fraudulent activities and verify user identity
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-file-doc tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Maintain Compliance Records</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Keep records as required by laws and regulations
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='d-flex align-items-start gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-chart-line-up tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-1'>Improve Platform Performance</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            Enhance user experience and system efficiency
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Information Sharing */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1100}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-warning-600'>05</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Information Sharing & Sale Disclosure</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='alert alert-warning bg-warning-50 border-warning-200 tw-p-4 rounded-3 mb-5'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-warning-circle tw-text-6 text-warning-600 mt-1'></i>
                      <div>
                        <h5 className='fw-bold text-dark-600 mb-2'>Important Disclosure</h5>
                        <p className='fw-normal text-dark-600 mb-0'>
                          We may share or sell your personal information to lenders and financial partners. 
                          This sharing may be considered a "sale" or "sharing" under certain state privacy laws.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='bg-warning-50 border border-warning-200 tw-p-5 rounded-4 h-100'>
                        <h4 className='fw-bold text-dark-600 mb-4'>Lenders & Financial Buyers</h4>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-bank tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Banks</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-hand-coins tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Licensed lenders</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-credit-card tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Loan servicers</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-wallet tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Financial service providers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-info-50 border border-info-200 tw-p-5 rounded-4 h-100'>
                        <h4 className='fw-bold text-dark-600 mb-4'>Service Providers</h4>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-share-network tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Lead-routing platforms</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-server tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Hosting providers</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-chart-pie-slice tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Analytics services</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-shield-check tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Compliance and audit partners</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6-15 in abbreviated form with key highlights */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1200}
              >
                <div className='row g-4'>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-phone-call tw-text-5 text-primary-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>TCPA & Communication Consent</h4>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        By submitting information, you consent to receive communications including phone calls, 
                        texts, and emails from us and our partners using automated systems as permitted by law.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-shield-check tw-text-5 text-success-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>GLBA Compliance</h4>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        We comply with the Gramm-Leach-Bliley Act by limiting access to information, 
                        implementing security safeguards, and sharing data only as permitted by law.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-cookie tw-text-5 text-info-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>Cookies & Tracking</h4>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        We use cookies for functionality, tracking, performance measurement, and fraud detection. 
                        You may disable cookies in your browser settings.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-calendar-x tw-text-5 text-purple-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>Data Retention</h4>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        We retain personal information only as long as necessary to fulfill purposes, 
                        meet regulatory requirements, resolve disputes, and maintain records.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='bg-primary-50 tw-p-5 rounded-3'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-user-circle-gear tw-text-5 text-primary-600'></i>
                        </div>
                        <div>
                          <h4 className='fw-bold text-dark-600 mb-1 h5-c'>Your Privacy Rights (U.S.)</h4>
                          <p className='fw-normal text-dark-600 mb-0 h5-c'>California Residents (CCPA/CPRA)</p>
                        </div>
                      </div>
                      <div className='row g-3'>
                        <div className='col-md-6'>
                          <div className='d-flex align-items-start gap-2'>
                            <i className='ph ph-check-circle tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Know what personal information we collect</span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='d-flex align-items-start gap-2'>
                            <i className='ph ph-check-circle tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Request deletion or correction</span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='d-flex align-items-start gap-2'>
                            <i className='ph ph-check-circle tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Opt out of sale/sharing of personal information</span>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='d-flex align-items-start gap-2'>
                            <i className='ph ph-check-circle tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Limit use of sensitive personal information</span>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='alert alert-warning bg-warning-50 border-warning-200 tw-p-3 rounded-2 mt-3'>
                            <div className='d-flex align-items-center gap-2'>
                              <i className='ph ph-envelope-simple tw-text-5 text-warning-600'></i>
                              <div>
                                <span className='fw-semibold text-dark-600'>Opt-Out: </span>
                                <a href="mailto:contact@rapidloanlink.com" className='text-primary-600 fw-medium'>
                                  contact@rapidloanlink.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-dark-600 border border-dark-500 rounded-4 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1300}
              >
                <div className='row align-items-center'>
                  <div className='col-lg-3'>
                    <div className='text-center text-lg-start mb-4 mb-lg-0'>
                      <div className='tw-w-16 tw-h-16 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mx-lg-0 mb-3'>
                        <i className='ph ph-info tw-text-7 text-primary-600'></i>
                      </div>
                      <h5 className='fw-bold text-white mb-0'>Contact Us</h5>
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='text-center text-lg-start'>
                      <h4 className='fw-bold text-white mb-3'>Rapid Loan Link</h4>
                      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-4'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-envelope-simple tw-text-5 text-primary-600'></i>
                          <a href="mailto:contact@rapidloanlink.com" className='fw-medium text-white hover-text-primary-600'>
                            contact@rapidloanlink.com
                          </a>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-globe-hemisphere-west tw-text-5 text-primary-600'></i>
                          <a href="https://www.rapidloanlink.com" className='fw-medium text-white hover-text-primary-600'>
                            www.rapidloanlink.com
                          </a>
                        </div>
                      </div>
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

export default PrivacyPolicyContent;