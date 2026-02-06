import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
/*import NewsletterTwo from "@/components/NewsletterTwo";*/
import ContactInner from "@/components/ContactInner";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Contact | Rapid Loan Link",
    description:
      "Get in touch with Rapid Loan Link for fast, secure, and reliable loan assistance. Our team is available to help you find the right lending solution anytime, anywhere.",
    openGraph: {
      title: "Contact | Rapid Loan Link",
      description:
        "Contact Rapid Loan Link to explore quick approvals, competitive rates, and secure online loan services designed to meet your financial needs.",
      url: "https://rapidloanlink.com/contact",
      type: "website",
      siteName: "Rapid Loan Link",
      images: [
        {
          url: "https://rapidloanlink.com/images/meta.png", // update if your image path is different
          width: 1200,
          height: 630,
          alt: "Rapid Loan Link - Fast & Secure Loans",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderTwo */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* ContactInner */}
      <ContactInner />

      {/* NewsletterTwo */}
      {/*<NewsletterTwo />*/}

      {/* FooterThree */}
      <FooterOne />
    </AOSWrap>
  );
};

export default Page;
