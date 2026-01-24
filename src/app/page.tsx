import type { Metadata } from "next";
import TopHeaderOne from "@/components/TopHeaderOne";
import Preloader from "@/helper/Preloader";
import HeaderTwo from "@/components/HeaderTwo";
import BannerOne from "@/components/BannerOne";
import AOSWrap from "@/helper/AOSWrap";
import OurFeatureOne from "@/components/OurFeatureOne";
import PaynoneOne from "@/components/PaynoneOne";
import WorkingSectionOne from "@/components/WorkingSectionOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import FAQOne from "@/components/FAQOne";
/*
import PaymentMethodOne from "@/components/PaymentMethodOne";
import BlogOne from "@/components/BlogOne";
import NewsletterOne from "@/components/NewsletterOne";
import MobileSectionOne from "@/components/MobileSectionOne";
import RequestSectionOne from "@/components/RequestSectionOne";
import ServicesOne from "@/components/ServicesOne";

*/
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | RapidLoanLink",
    description:
      "RapidLoanLink offers fast and reliable loans from $100 to $5,000. Apply online, get quick approval, and access funds securely with clear terms and no hidden fees.",
    openGraph: {
      title: "Home | RapidLoanLink",
      description:
        "RapidLoanLink provides fast, simple, and secure loans. Borrow from $100 to $5,000, enjoy quick approval, and receive funds directly in your bank account.",
      url: "https://www.rapidloanlink.com",
      type: "website",
      images: [
        {
          url: "https://www.rapidloanlink.com/images/meta.png",
          width: 1200,
          height: 630,
          alt: "RapidLoanLink - Fast Loans Online",
        },
      ],
    },
  };
};

export default function Home() {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderTwo />

      {/* BannerOne */}
      <BannerOne />

      {/* OurFeatureOne */}
      <OurFeatureOne />

      {/* PaynoneOne */}
      <PaynoneOne />

      {/* ServicesOne */}
      {/*<ServicesOne />*/}

      {/* RequestSectionOne */}
      {/*<RequestSectionOne />*/}

      {/* WorkingSectionOne */}
     <WorkingSectionOne />

      {/* MobileSectionOne */}
       {/*<MobileSectionOne />*/}

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* FAQOne */}
      <FAQOne />

      {/* PaymentMethodOne */}
      {/* <PaymentMethodOne />*/}

      {/* BlogOne */}
      {/*<BlogOne />*/}

      {/* NewsletterOne */}
      {/*<NewsletterOne />*/}

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
