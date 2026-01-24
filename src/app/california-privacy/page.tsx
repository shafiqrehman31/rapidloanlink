import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import CaliforniaPrivacyContent from "@/components/CaliforniaPrivacyContent";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "California Privacy Notice | RapidLoanLink",
    description:
      "California Privacy Notice for RapidLoanLink. Learn about your CCPA/CPRA rights, data collection practices, and how to exercise your privacy rights.",
    openGraph: {
      title: "California Privacy Notice | RapidLoanLink",
      description:
        "Understand your privacy rights under California law. This notice explains how RapidLoanLink handles personal information and how you can exercise your CCPA/CPRA rights.",
      url: "https://www.rapidloanlink.com/california-privacy",
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
      <Breadcrumb title={"California Privacy Notice"} />
      <CaliforniaPrivacyContent />
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;