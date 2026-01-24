import React from "react";

const TermsAndConditionsContent: React.FC = () => {
  return (
    <section className='py-140 overflow-hidden'>
      <div className='container container-two'>
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12'>
            <div className='terms-content'>
              <div
                className='text-center mb-6'
                data-aos='fade-up'
                data-aos-duration={600}
              >
                <h1 className='fw-normal text-dark-600 mb-3'>
                  Terms and Conditions of Use
                </h1>
                <div className='d-flex align-items-center justify-content-center gap-3 mb-4'>
                  <p className='fw-normal text-dark-500 mb-0'>
                    Effective Date: January 06, 2026
                  </p>
                  <span className='text-dark-300'>•</span>
                  <p className='fw-normal text-dark-500 mb-0'>
                    Last Updated: January 06, 2026
                  </p>
                </div>
              </div>

              <div className='terms-body' data-aos='fade-up' data-aos-duration={800}>
                <div className='alert alert-warning bg-warning-100 border-warning-200 p-4 rounded-3 mb-6'>
                  <div className='d-flex align-items-start gap-3'>
                    <i className='ph ph-warning-circle tw-text-6 text-warning-600 mt-1'></i>
                    <div>
                      <h5 className='fw-semibold text-dark-600 mb-2'>IMPORTANT NOTICE REGARDING ARBITRATION</h5>
                      <p className='fw-normal text-dark-600 mb-0'>
                        PLEASE READ THESE TERMS CAREFULLY. They include a binding arbitration agreement, 
                        a class-action waiver, and limitations on your legal rights. By using the Service, 
                        you agree that disputes will be resolved individually through arbitration, not in 
                        court, and not as part of a class action.
                      </p>
                    </div>
                  </div>
                </div>

                <p className='fw-normal tw-text-lg text-dark-600 mb-6'>
                  RapidLoanLink.com and its owner and operator ("Rapid Loan Link," "we," "us," or "our")
                  provide loan referral and lead-generation services (described below), related content, and
                  technology through our website located at www.rapidloanlink.com (the "Site") and any related
                  applications, tools, features, or technologies (collectively, the "Service").
                </p>
                <p className='fw-normal tw-text-lg text-dark-600 mb-6'>
                  By accessing, browsing, or using any part of the Service, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and Conditions of Use ("Terms").
                  If you do not agree to these Terms, you must not use the Service.
                </p>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>1. Loan Referral & Lead Generation Service</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Rapid Loan Link operates an online loan referral and lead-distribution platform that connects
                    consumers with third-party lenders, lender networks, and financial service providers ("Lender
                    Partners").
                  </p>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    To use the Service, you must complete an online request form ("Request Form") that may require
                    personal information, including but not limited to:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Name</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Address</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Phone number</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Email address</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Employment and income information</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Banking or financial details</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-check-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Social Security number (where required by lenders)</span>
                    </li>
                  </ul>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    Our Privacy Policy governs how we collect and use this information and is incorporated into these
                    Terms by reference.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>2. No Lending or Credit Decisions</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Rapid Loan Link is not a lender, does not issue loans, and does not make credit decisions.
                  </p>
                  <div className='bg-neutral-50 p-4 rounded-3 mb-4'>
                    <p className='fw-normal tw-text-lg text-dark-600 mb-0'>
                      We do not guarantee:
                    </p>
                    <ul className='list-unstyled mt-3'>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-x-circle tw-text-5 text-danger-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>That you will receive a loan offer</span>
                      </li>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-x-circle tw-text-5 text-danger-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>That you will be matched with a lender</span>
                      </li>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-x-circle tw-text-5 text-danger-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>Any specific loan amount, rate, fee, or term</span>
                      </li>
                    </ul>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    All lending decisions are made solely by Lender Partners.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>3. Information Sharing & Contact Consent</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    By submitting a Request Form, you:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>
                        Authorize Rapid Loan Link to share your information with multiple Lender Partners
                      </span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>
                        Acknowledge that you are requesting loan offers from third parties
                      </span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-arrow-right tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>
                        Agree that Rapid Loan Link and Lender Partners may contact you via:
                      </span>
                    </li>
                  </ul>
                  <div className='ps-5'>
                    <ul className='list-unstyled mb-4'>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-phone-call tw-text-5 text-primary-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>Phone calls</span>
                      </li>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-chat-text tw-text-5 text-primary-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>Text messages (SMS)</span>
                      </li>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-envelope tw-text-5 text-primary-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>Emails</span>
                      </li>
                      <li className='d-flex align-items-start gap-2 mb-2'>
                        <i className='ph ph-robot tw-text-5 text-primary-600 mt-1'></i>
                        <span className='fw-normal tw-text-lg text-dark-600'>
                          Automated dialing systems or prerecorded messages (where permitted by law)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    Consent is not required to purchase goods or services.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>4. Credit Checks</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Lender Partners may review your information in real time and may perform:
                  </p>
                  <div className='row mb-4'>
                    <div className='col-md-6 mb-3'>
                      <div className='bg-success-50 p-4 rounded-3 h-100'>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                          <i className='ph ph-check-circle tw-text-5 text-success-600'></i>
                          <h5 className='fw-semibold text-dark-600 mb-0'>Soft Credit Checks</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-0'>
                          Do not affect credit scores
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <div className='bg-warning-50 p-4 rounded-3 h-100'>
                        <div className='d-flex align-items-center gap-2 mb-3'>
                          <i className='ph ph-warning-circle tw-text-5 text-warning-600'></i>
                          <h5 className='fw-semibold text-dark-600 mb-0'>Hard Credit Inquiries</h5>
                        </div>
                        <p className='fw-normal text-dark-600 mb-0'>
                          May affect your credit score
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    These checks may be conducted through:
                  </p>
                  <div className='row mb-4'>
                    <div className='col-md-4 col-6 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>Experian</p>
                      </div>
                    </div>
                    <div className='col-md-4 col-6 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>Equifax</p>
                      </div>
                    </div>
                    <div className='col-md-4 col-6 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>TransUnion</p>
                      </div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3'>
                        <p className='fw-semibold text-dark-600 mb-0'>DataX</p>
                      </div>
                    </div>
                    <div className='col-md-6 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3'>
                        <p className='fw-semibold text-dark-600 mb-0'>MicroBilt</p>
                      </div>
                    </div>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    By submitting a Request Form, you authorize such reviews.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>5. Redirection to Lender Websites</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    If a Lender Partner determines that your information meets its criteria, you may be redirected to
                    the lender's website.
                  </p>
                  <div className='alert alert-info bg-info-50 border-info-200 p-4 rounded-3 mb-4'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-info tw-text-6 text-info-600 mt-1'></i>
                      <div>
                        <h5 className='fw-semibold text-dark-600 mb-2'>Once redirected:</h5>
                        <ul className='mb-0 ps-3'>
                          <li className='mb-2'>Rapid Loan Link is no longer involved</li>
                          <li className='mb-2'>The lender's own terms and privacy policies apply</li>
                          <li className='mb-0'>Rapid Loan Link is not responsible for lender actions or decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>6. Electronic Disclosures & E-Sign Consent</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    By using the Service, you consent to receive:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-file-text tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Electronic disclosures</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-bell-ringing tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Notices</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-file-doc tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Agreements</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-chats-circle tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Communications</span>
                    </li>
                  </ul>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    Lender Partners may require electronic signatures, which are legally binding and equivalent to
                    handwritten signatures.
                  </p>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    You may withdraw electronic consent directly with the lender, though doing so may affect your
                    ability to obtain a loan.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>7. Accuracy of Information</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    You represent that all information you submit is accurate, current, and truthful.
                  </p>
                  <div className='alert alert-danger bg-danger-50 border-danger-200 p-4 rounded-3'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-warning-octagon tw-text-6 text-danger-600 mt-1'></i>
                      <div>
                        <h5 className='fw-semibold text-dark-600 mb-2'>Providing false or misleading information may result in:</h5>
                        <ul className='mb-0 ps-3'>
                          <li className='mb-2'>Rejection of your request</li>
                          <li className='mb-0'>Suspension or termination of access to the Service</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>8. Changes to the Service</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Rapid Loan Link may modify, suspend, or discontinue any part of the Service at any time without
                    notice.
                  </p>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    We are not responsible for delays or failures caused by:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-wifi-slash tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Incorrect user information</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-2'>
                      <i className='ph ph-cloud-snow tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Internet or system issues beyond our control</span>
                    </li>
                  </ul>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>9. Disclaimers</h2>
                  <div className='bg-neutral-100 p-4 rounded-3 mb-4'>
                    <p className='fw-semibold tw-text-lg text-dark-600 mb-2 text-center'>
                      THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE."
                    </p>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Rapid Loan Link DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING:
                  </p>
                  <div className='row mb-4'>
                    <div className='col-md-4 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>Merchantability</p>
                      </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>Fitness for a Particular Purpose</p>
                      </div>
                    </div>
                    <div className='col-md-4 mb-3'>
                      <div className='bg-neutral-50 p-3 rounded-3 text-center'>
                        <p className='fw-semibold text-dark-600 mb-0'>Non-Infringement</p>
                      </div>
                    </div>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    USE OF THE SERVICE IS AT YOUR OWN RISK.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>10. Limitation of Liability</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    To the maximum extent permitted by law, Rapid Loan Link, its partners, affiliates, and service
                    providers are not liable for:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-prohibit tw-text-5 text-danger-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Indirect or consequential damages</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-prohibit tw-text-5 text-danger-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Credit decisions or lender actions</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-prohibit tw-text-5 text-danger-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Loss of data or business</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-prohibit tw-text-5 text-danger-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>
                        Unauthorized access beyond reasonable security measures
                      </span>
                    </li>
                  </ul>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    Some states may not allow these limitations; rights may vary.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>11. Indemnification</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    You agree to indemnify and hold harmless Rapid Loan Link and its partners from any claims,
                    damages, or expenses arising from:
                  </p>
                  <ul className='list-unstyled mb-4'>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-shield-checkered tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Your use of the Service</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-shield-checkered tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Your violation of these Terms</span>
                    </li>
                    <li className='d-flex align-items-start gap-2 mb-3'>
                      <i className='ph ph-shield-checkered tw-text-5 text-primary-600 mt-1'></i>
                      <span className='fw-normal tw-text-lg text-dark-600'>Your violation of any law or third-party rights</span>
                    </li>
                  </ul>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>12. Third-Party Links</h2>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    The Service may include links to third-party websites.
                    Rapid Loan Link does not control or endorse third-party content or services.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>13. Binding Arbitration & Class Action Waiver</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    Any dispute arising from or relating to these Terms or the Service shall be resolved exclusively
                    through binding arbitration, governed by the Federal Arbitration Act, administered by the
                    American Arbitration Association (AAA).
                  </p>
                  <div className='alert alert-warning bg-warning-50 border-warning-200 p-4 rounded-3 mb-4'>
                    <div className='d-flex align-items-start gap-3'>
                      <i className='ph ph-scales tw-text-6 text-warning-600 mt-1'></i>
                      <div>
                        <h5 className='fw-semibold text-dark-600 mb-2'>You agree:</h5>
                        <ul className='mb-0 ps-3'>
                          <li className='mb-2'>No class actions</li>
                          <li className='mb-2'>No representative claims</li>
                          <li className='mb-0'>Arbitration on an individual basis only</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    You may pursue qualifying claims in small-claims court.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>14. Governing Law</h2>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    These Terms are governed by the laws of the United States and the applicable state, without
                    regard to conflict-of-law principles.
                  </p>
                </div>

                <div className='terms-section mb-6'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>15. Changes to These Terms</h2>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-4'>
                    We may update these Terms at any time by posting changes on the Site.
                  </p>
                  <p className='fw-normal tw-text-lg text-dark-600'>
                    Continued use of the Service constitutes acceptance of the revised Terms.
                  </p>
                </div>

                <div className='terms-section'>
                  <h2 className='fw-semibold text-dark-600 mb-4'>16. Contact Information</h2>
                  <div className='bg-neutral-50 p-4 rounded-3'>
                    <div className='row'>
                      <div className='col-md-6 mb-3'>
                        <div className='d-flex align-items-start gap-3'>
                          <i className='ph ph-buildings tw-text-5 text-primary-600 mt-1'></i>
                          <div>
                            <h5 className='fw-semibold text-dark-600 mb-1'>Rapid Loan Link</h5>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6 mb-3'>
                        <div className='d-flex align-items-start gap-3'>
                          <i className='ph ph-globe-hemisphere-west tw-text-5 text-primary-600 mt-1'></i>
                          <div>
                            <h5 className='fw-semibold text-dark-600 mb-1'>Website</h5>
                            <p className='fw-normal text-dark-600 mb-0'>www.rapidloanlink.com</p>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='d-flex align-items-start gap-3'>
                          <i className='ph ph-envelope-simple tw-text-5 text-primary-600 mt-1'></i>
                          <div>
                            <h5 className='fw-semibold text-dark-600 mb-1'>Email</h5>
                            <p className='fw-normal text-dark-600 mb-0'>contact@rapidloanlink.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-6 border-top border-neutral-200'>
                  <p className='fw-normal tw-text-lg text-dark-600 mb-0 text-center'>
                    This document was last updated on January 06, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditionsContent;