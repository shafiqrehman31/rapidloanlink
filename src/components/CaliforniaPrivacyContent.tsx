import React from "react";
import Link from "next/link";

const CaliforniaPrivacyContent: React.FC = () => {
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
                <div className='tw-w-2 tw-h-8 bg-warning-600 rounded'></div>
                <h6 className='fw-semibold text-warning-600 mb-0'>CALIFORNIA PRIVACY RIGHTS</h6>
              </div>
              <h1 className='fw-bold text-dark-600 mb-4 display-5'>
                California Privacy Notice (CCPA / CPRA)
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
                This California Privacy Notice supplements the Privacy Policy of Rapid Loan Link ("Company,"
                "we," "us," or "our") and applies solely to California residents ("Consumers") as defined by the
                California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).
              </p>
            </div>

            <div className='alert alert-warning bg-warning-50 border-warning-200 tw-p-5 rounded-4 mb-8'>
              <div className='d-flex align-items-start gap-3'>
                <i className='ph ph-shield-check tw-text-6 text-warning-600 mt-1'></i>
                <div>
                  <h5 className='fw-bold text-dark-600 mb-2'>For California Residents Only</h5>
                  <p className='fw-normal text-dark-600 mb-0'>
                    This notice explains your privacy rights under California law and how we handle your personal information.
                    If you are not a California resident, please refer to our general <Link href="/privacy-policy" className="text-primary-600 fw-medium">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='california-privacy-content'>
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
                    <h2 className='fw-bold text-dark-600 mb-0'>Our Role</h2>
                  </div>
                </div>

                <div className='row align-items-center'>
                  <div className='col-lg-8'>
                    <div className='mb-4 mb-lg-0'>
                      <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                        Rapid Loan Link operates a financial lead-generation and distribution platform that connects
                        consumers seeking loan products with third-party lenders and financial service providers through
                        real-time routing and ping-tree technology.
                      </p>
                      
                      <div className='alert alert-danger bg-danger-50 border-danger-200 p-4 rounded-3'>
                        <div className='d-flex align-items-start gap-3'>
                          <i className='ph ph-prohibit tw-text-6 text-danger-600 mt-1'></i>
                          <div>
                            <h5 className='fw-bold text-dark-600 mb-2'>Important Disclosure</h5>
                            <p className='fw-normal text-dark-600 mb-0'>
                              Rapid Loan Link is not a lender, does not make credit decisions, and does not issue loans.
                              We are a lead generation platform connecting you with potential lenders.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-4'>
                    <div className='bg-primary-50 tw-p-5 rounded-4 text-center h-100'>
                      <div className='tw-w-16 tw-h-16 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4'>
                        <i className='ph ph-users-three tw-text-7 text-primary-600'></i>
                      </div>
                      <h5 className='fw-bold text-dark-600 mb-2 h5-c'>Lead Generation Platform</h5>
                      <p className='fw-normal text-dark-600 h5-c'>
                        We connect consumers with lenders through real-time distribution technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Categories of Personal Information */}
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
                    <h2 className='fw-bold text-dark-600 mb-0'>Categories of Personal Information Collected</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-5'>
                    Within the last 12 months, we may have collected the following categories of personal
                    information:
                  </p>

                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='bg-success-50 border border-success-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-identification-card tw-text-5 text-success-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0'>A. Identifiers</h4>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-user tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Full name</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-envelope-simple tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Email address</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-phone-call tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Phone number</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-wifi-high tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>IP address</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-browser tw-text-5 text-success-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Online identifiers</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-primary-50 border border-primary-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-user-circle tw-text-5 text-primary-600'></i>
                          </div>
                          <h4 className='fw-bold text-dark-600 mb-0 h5-c'>B. Personal Information</h4>
                          <span className='badge bg-primary-100 text-primary-600 fw-medium h5-c'>Cal. Civ. Code §1798.80</span>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-3 h5-c'>
                            <i className='ph ph-map-pin tw-text-5 text-primary-600 mt-1 h5-c'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Mailing address</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3 h5-c'>
                            <i className='ph ph-cake tw-text-5 text-primary-600 mt-1 h5-c'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Date of birth</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-briefcase tw-text-5 text-primary-600 mt-1 h5-c'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Employment information</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-3'>
                            <i className='ph ph-currency-dollar tw-text-5 text-primary-600 mt-1 h5-c'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Income-related indicators</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-file-text tw-text-5 text-primary-600 mt-1 h5-c'></i>
                            <span className='fw-normal text-dark-600 h5-c'>Loan request details</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-info-50 border border-info-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-globe-hemisphere-west tw-text-5 text-info-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>C. Internet Activity</h5>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-monitor tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Website interaction data</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-browsers tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Browsing behavior</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-share-network tw-text-5 text-info-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Referral source data</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-warning-50 border border-warning-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-map-pin-line tw-text-5 text-warning-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>D. Geolocation Data</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-0'>
                          Approximate location derived from IP address
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='bg-purple-50 border border-purple-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-shield-checkered tw-text-5 text-purple-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>E. Sensitive Information</h5>
                        </div>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-credit-card tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Financial information</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-key tw-text-5 text-purple-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Authentication data</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3-6 Combined */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={900}
              >
                <div className='row g-4'>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-arrow-bend-up-right tw-text-5 text-success-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>Sources of Information</h4>
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-user-focus tw-text-5 text-success-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Consumers directly</span>
                        </li>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-handshake tw-text-5 text-success-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Affiliate publishers and partners</span>
                        </li>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-users tw-text-5 text-success-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Lead generators</span>
                        </li>
                        <li className='d-flex align-items-start gap-2'>
                          <i className='ph ph-shield-warning tw-text-5 text-success-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Fraud-prevention providers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-target tw-text-5 text-primary-600'></i>
                        </div>
                        <h4 className='fw-bold text-dark-600 mb-0'>Purposes for Collection</h4>
                      </div>
                      <ul className='list-unstyled mb-0'>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-users-three tw-text-5 text-primary-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Match consumers with lenders</span>
                        </li>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-gear-six tw-text-5 text-primary-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Optimize distribution systems</span>
                        </li>
                        <li className='d-flex align-items-start gap-2 mb-3'>
                          <i className='ph ph-shield-checkered tw-text-5 text-primary-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Verify identity and prevent fraud</span>
                        </li>
                        <li className='d-flex align-items-start gap-2'>
                          <i className='ph ph-scales tw-text-5 text-primary-600 mt-1'></i>
                          <span className='fw-normal text-dark-600'>Comply with legal obligations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='alert alert-danger bg-danger-50 border-danger-200 tw-p-5 rounded-3'>
                      <div className='d-flex align-items-start gap-3'>
                        <i className='ph ph-warning-octagon tw-text-6 text-danger-600 mt-1'></i>
                        <div>
                          <h4 className='fw-bold text-dark-600 mb-3'>Sale or Sharing of Personal Information</h4>
                          <p className='fw-normal text-dark-600 mb-3'>
                            Rapid Loan Link may sell or share personal information to third-party lenders and financial
                            buyers in exchange for monetary or other valuable consideration.
                          </p>
                          <div className='row'>
                            <div className='col-md-6'>
                              <h5 className='fw-semibold text-dark-600 mb-2'>What may be shared:</h5>
                              <ul className='list-unstyled'>
                                <li className='d-flex align-items-start gap-2 mb-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-danger-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Identifiers</span>
                                </li>
                                <li className='d-flex align-items-start gap-2 mb-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-danger-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Financial and loan-related information</span>
                                </li>
                                <li className='d-flex align-items-start gap-2'>
                                  <i className='ph ph-arrow-right tw-text-5 text-danger-600 mt-1'></i>
                                  <span className='fw-normal text-dark-600'>Internet or network activity data</span>
                                </li>
                              </ul>
                            </div>
                            <div className='col-md-6'>
                              <h5 className='fw-semibold text-dark-600 mb-2'>Sensitive Personal Information</h5>
                              <p className='fw-normal text-dark-600'>
                                Sensitive personal information is used only as reasonably necessary to provide requested 
                                services, match consumers with lenders, maintain security, and meet compliance obligations.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7: Your California Privacy Rights */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 mb-8 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='row align-items-center mb-5'>
                  <div className='col-auto'>
                    <div className='section-number tw-w-12 tw-h-12 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center'>
                      <span className='fw-bold tw-text-2xl text-warning-600'>07</span>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className='fw-bold text-dark-600 mb-0'>Your California Privacy Rights</h2>
                  </div>
                </div>

                <div className='mb-4'>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-5'>
                    If you are a California resident, you have the following rights under CCPA/CPRA:
                  </p>

                  <div className='row g-4'>
                    <div className='col-lg-6'>
                      <div className='bg-warning-50 border border-warning-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-warning-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-eye tw-text-5 text-warning-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Right to Know</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-3'>
                          Request disclosure of:
                        </p>
                        <ul className='list-unstyled mb-0'>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-list-checks tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Categories of personal information collected</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-arrow-bend-up-right tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Sources of personal information</span>
                          </li>
                          <li className='d-flex align-items-start gap-2 mb-2'>
                            <i className='ph ph-target tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Business purposes for collection</span>
                          </li>
                          <li className='d-flex align-items-start gap-2'>
                            <i className='ph ph-users-three tw-text-5 text-warning-600 mt-1'></i>
                            <span className='fw-normal text-dark-600'>Third parties with whom information is shared</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-danger-50 border border-danger-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-trash-simple tw-text-5 text-danger-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Right to Delete</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Request deletion of personal information, subject to legal exceptions and retention requirements.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-success-50 border border-success-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-success-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-pencil-simple-line tw-text-5 text-success-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Right to Correct</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Request correction of inaccurate personal information we maintain about you.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-primary-50 border border-primary-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-prohibit tw-text-5 text-primary-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0 h5-c'>Right to Opt Out</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-3 h5-c'>
                          Opt out of the sale or sharing of your personal information at any time.
                        </p>
                        <div className='alert alert-warning bg-warning-100 border-warning-200 tw-p-3 rounded-2'>
                          <div className='d-flex align-items-center gap-2'>
                            <i className='ph ph-envelope-simple tw-text-5 text-warning-600'></i>
                            <div>
                              <span className='fw-semibold text-dark-600'>Email: </span>
                              <a href="mailto:contact@rapidloanlink.com" className='text-primary-600 fw-medium'>
                                contact@rapidloanlink.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-purple-50 border border-purple-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-purple-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-lock-key tw-text-5 text-purple-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Right to Limit Use</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          Request limitations on how sensitive personal information is used beyond necessary purposes.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='bg-info-50 border border-info-200 tw-p-5 rounded-4 h-100'>
                        <div className='d-flex align-items-center gap-3 mb-4'>
                          <div className='tw-w-12 tw-h-12 bg-info-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                            <i className='ph ph-scales tw-text-5 text-info-600'></i>
                          </div>
                          <h5 className='fw-bold text-dark-600 mb-0'>Right to Non-Discrimination</h5>
                        </div>
                        <p className='fw-normal text-dark-600'>
                          We will not discriminate against you for exercising your privacy rights, including 
                          denying services, charging different prices, or providing a different level of service.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='alert alert-success bg-success-50 border-success-200 tw-p-4 rounded-3 mt-5'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-megaphone-simple tw-text-6 text-success-600 mt-1'></i>
                      <div>
                        <h5 className='fw-bold text-dark-600 mb-2'>How to Exercise Your Rights</h5>
                        <p className='fw-normal text-dark-600 mb-3'>
                          To submit a privacy request or opt out of sale/sharing, contact us at:
                        </p>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-envelope-simple tw-text-5 text-success-600'></i>
                          <a href="mailto:contact@rapidloanlink.com" className='fw-medium text-primary-600'>
                            contact@rapidloanlink.com
                          </a>
                        </div>
                        <p className='fw-normal text-dark-600 mt-3 mb-0'>
                          We may verify your identity before processing your request. Authorized agents may submit 
                          requests on your behalf with proper documentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Sections */}
              <div 
                className='privacy-section-card tw-p-6 tw-p-lg-8 bg-white border border-neutral-200 rounded-4 shadow-sm'
                data-aos='fade-up'
                data-aos-duration={1100}
              >
                <div className='row g-4'>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-calendar-x tw-text-5 text-primary-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-0'>Data Retention</h5>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        We retain personal information only as long as necessary to fulfill lead-generation purposes, 
                        meet legal obligations, resolve disputes, and enforce agreements.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='bg-light tw-p-5 rounded-3 h-100'>
                      <div className='d-flex align-items-center gap-3 mb-4'>
                        <div className='tw-w-12 tw-h-12 bg-danger-100 rounded-circle d-flex align-items-center justify-content-center flex-shrink-0'>
                          <i className='ph ph-prohibit-inset tw-text-5 text-danger-600'></i>
                        </div>
                        <h5 className='fw-bold text-dark-600 mb-0'>Minors' Privacy</h5>
                      </div>
                      <p className='fw-normal text-dark-600'>
                        Rapid Loan Link does not knowingly sell or share the personal information of individuals 
                        under 16 years of age. Our services are intended for individuals 18 years or older.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='alert alert-info bg-info-50 border-info-200 tw-p-4 rounded-3'>
                      <div className='d-flex align-items-start gap-3'>
                        <i className='ph ph-clock-countdown tw-text-6 text-info-600 mt-1'></i>
                        <div>
                          <h5 className='fw-bold text-dark-600 mb-2'>Policy Updates</h5>
                          <p className='fw-normal text-dark-600 mb-0'>
                            We may update this California Privacy Notice from time to time. Any updates will be 
                            posted on this page with a revised effective date. We encourage you to review this 
                            notice periodically.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div 
              className='mt-8'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div className='bg-dark-600 tw-p-6 tw-p-lg-8 rounded-4'>
                <div className='row align-items-center'>
                  <div className='col-lg-3 mb-4 mb-lg-0'>
                    <div className='text-center'>
                      <div className='tw-w-16 tw-h-16 bg-primary-100 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3'>
                        <i className='ph ph-phone-call tw-text-7 text-primary-600'></i>
                      </div>
                      <h5 className='fw-bold text-white mb-0'>Contact Information</h5>
                    </div>
                  </div>
                  <div className='col-lg-9'>
                    <div className='text-center text-lg-start'>
                      <h4 className='fw-bold text-white mb-4'>Rapid Loan Link</h4>
                      <div className='d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start gap-4'>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-globe-hemisphere-west tw-text-5 text-primary-600'></i>
                          <a href="https://www.rapidloanlink.com" className='fw-medium text-white hover-text-primary-600'>
                            www.rapidloanlink.com
                          </a>
                        </div>
                        <div className='d-flex align-items-center gap-2'>
                          <i className='ph ph-envelope-simple tw-text-5 text-primary-600'></i>
                          <a href="mailto:contact@rapidloanlink.com" className='fw-medium text-white hover-text-primary-600'>
                            contact@rapidloanlink.com
                          </a>
                        </div>
                      </div>
                      <div className='mt-4'>
                        <Link 
                          href="/privacy-policy"
                          className='btn btn-primary fw-semibold tw-px-5 tw-py-2'
                        >
                          View Full Privacy Policy
                        </Link>
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

export default CaliforniaPrivacyContent;