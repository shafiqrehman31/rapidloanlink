import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Privacy Policy | RapidLoanLink",
    description:
      "Read RapidLoanLink's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about data sharing, your privacy rights, and more.",
    openGraph: {
      title: "Privacy Policy | RapidLoanLink",
      description:
        "Understand how RapidLoanLink handles your personal information. Our Privacy Policy explains data collection, sharing practices, and your privacy rights.",
      url: "https://www.rapidloanlink.com/privacy-policy",
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
      <Breadcrumb title={"Privacy Policy"} />
      <PrivacyPolicyContent />
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;