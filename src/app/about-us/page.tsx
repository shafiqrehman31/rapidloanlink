import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
/*import NewsletterTwo from "@/components/NewsletterTwo";*/
import FooterThree from "@/components/FooterThree";
import AboutInner from "@/components/AboutInner";
import OurBankOne from "@/components/OurBankOne";
/*import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import TeamMemberOne from "@/components/TeamMemberOne";
import JoinSectionOne from "@/components/JoinSectionOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";*/
import FAQOne from "@/components/FAQOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "About | RapidLoanLink",
    description:
      "RapidLoanLink is a trusted online loan platform offering fast, secure, and transparent loans. We help customers access quick funding with simple terms and a smooth application process.",
    openGraph: {
      title: "About | RapidLoanLink",
      description:
        "RapidLoanLink is a reliable online loan service focused on speed, security, and transparency. Learn more about our mission to provide quick and hassle-free financial solutions.",
      url: "https://www.rapidloanlink.com/about",
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
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutInner */}
      <AboutInner />

      {/* OurBankOne */}
      <OurBankOne />

      {/* WhyChooseUsOne */}
      {/*<WhyChooseUsOne />*/}

      {/* TeamMemberOne */}
      {/*<TeamMemberOne />*/}

      {/* JoinSectionOne */}
      {/*<JoinSectionOne />*/}

      {/* TestimonialsTwo */}
      <div className='bg-neutral-10'>
       {/* <TestimonialsTwo />*/}
      </div>

      {/* FAQOne */}
     {/* <FAQOne /> */} 

      {/* NewsletterTwo */}
      {/*<NewsletterTwo />*/}

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
