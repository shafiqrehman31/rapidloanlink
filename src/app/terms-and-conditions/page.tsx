import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import TermsAndConditionsContent from "@/components/TermsAndConditionsContent";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Terms and Conditions | RapidLoanLink",
    description:
      "Review RapidLoanLink's Terms and Conditions. Understand our loan referral services, user responsibilities, privacy practices, and legal agreements.",
    openGraph: {
      title: "Terms and Conditions | RapidLoanLink",
      description:
        "Read the Terms and Conditions for using RapidLoanLink's loan referral services. Learn about user agreements, privacy policies, and legal terms.",
      url: "https://www.rapidloanlink.com/terms-and-conditions",
      type: "website",
      images: [
        {
          url: "https://www.rapidloanlink.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "RapidLoanLink",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      <Preloader />
      <TopHeaderOne />
      <HeaderOne />
      <Breadcrumb title={"Terms and Conditions"} />
      <TermsAndConditionsContent />
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;