import { Wendy_One, Zen_Maru_Gothic } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOSInit from "@/helper/AOSInit";
import "./globals.css";
import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ErrorBoundary from "@/helper/ErrorBoundary";
import '@fortawesome/fontawesome-svg-core/styles.css';



const wendyOne = Wendy_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wendy-one",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-maru",
});

export async function generateMetadata() {
  return {
    title: {
      default: "Fast Loans, Clear Terms, Peace of Mind.",
      template: "%s | ",
    },
    description: "Fast Loans, Clear Terms, Peace of Mind..",
    robots: {
      index: true,
      follow: true,
    },
  };
}




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  className={`${wendyOne.variable} ${zenMaruGothic.variable}`}
    >

      <head>
        {/* Load public CSS files via link */}
    <link rel="stylesheet" href="/assets/css/phosphor-icons-fill.css" />
    <link rel="stylesheet" href="/assets/css/phosphor-icons-duotone.css" />
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/main.css" />
    <link rel="stylesheet" href="/assets/css/aos.css" />
    
    
    <link rel="stylesheet" href="/assets/css/phosphor-icons-thin.css" />
    <link rel="stylesheet" href="/assets/css/phosphor-icons-regular.css" />
    <link rel="stylesheet" href="/assets/css/phosphor-icons-light.css" />
    <link rel="stylesheet" href="/assets/css/phosphor-icons-bold.css" />

    
      </head>
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          <BootstrapInit />
          <RouteScrollToTop />
            <AOSInit />
        </ErrorBoundary>

        {children}
      </body>
    </html>
  );
}

