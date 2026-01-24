import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import BeforeYouApplyContent from "@/components/BeforeYouApplyContent";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Before You Apply | RapidLoanLink",
    description:
      "Important things to know before applying for a loan. Understand late payments, credit score impacts, debt collection, funding times, and our role as a loan referral service.",
    openGraph: {
      title: "Before You Apply | RapidLoanLink",
      description:
        "Learn what to consider before taking out a loan. Know about payment terms, credit impacts, collection practices, and funding timelines with RapidLoanLink.",
      url: "https://www.rapidloanlink.com/before-you-apply",
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
      <Breadcrumb title={"Before You Apply"} />
      <BeforeYouApplyContent />
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;