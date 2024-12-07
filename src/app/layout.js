import localFont from 'next/font/local'
import "./globals.css";
import 'swiper/css';
import ogImage from "@/app/images/OG.png";
import { ActiveTabProvider } from "./context/ActiveTabContext";
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer } from "react-toastify";

const superaGothic = localFont({
  src: [
    {
      path: './fonts/SuperaGothic-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-UltraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-Regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-Bold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-ExtraBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-Black.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/SuperaGothic-UltraBlack.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-supera-gothic',
  display: 'swap',
})

const openGraphData = {
  url: "https://sushmagroup.realtynivesh.com/sushmabelleza/",
  type: "website",
  title: "Sushma Belleza",
  description: "Sushma Belleza",
  image: {
    url: `https://sushmagroup.realtynivesh.com/sushmabelleza/${ogImage.src}`,
    width: 1200,
    height: 640,
    alt: "Sushma Belleza Images",
  },
};

const twitterData = {
  card: "summary_large_image",
  domain: "https://sushmagroup.realtynivesh.com/sushmabelleza/",
  title: openGraphData.title,
  description: openGraphData.description,
  image: openGraphData.image.url,
};

export const metadata = {
  title: openGraphData.title,
  description: openGraphData.description,
  keywords: "Sushma Belleza"
};

const MetaTags = () => (
  <>
    {/* Open Graph Meta Tags */}
    <meta property="og:url" content={openGraphData.url} />
    <meta property="og:type" content={openGraphData.type} />
    <meta property="og:title" content={openGraphData.title} />
    <meta property="og:description" content={openGraphData.description} />
    <meta property="og:image" content={openGraphData.image.url} />
    <meta property="og:image:width" content={openGraphData.image.width} />
    <meta property="og:image:height" content={openGraphData.image.height} />
    <meta property="og:image:alt" content={openGraphData.image.alt} />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content={twitterData.card} />
    <meta property="twitter:domain" content={twitterData.domain} />
    <meta property="twitter:url" content={openGraphData.url} />
    <meta name="twitter:title" content={twitterData.title} />
    <meta name="twitter:description" content={twitterData.description} />
    <meta name="twitter:image" content={twitterData.image} />
  </>
);
export default function RootLayout({ children }) {
  return (
    <ActiveTabProvider>
      <html lang="en" className={`${superaGothic.variable}`}>
        <head>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${process.env.basePath}/favicon.ico`}
          />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
          <link rel="icon" href={`${process.env.basePath}/favicon.ico`} sizes="any" />
          <MetaTags />
        </head>
        <body className={`antialiased`}>
          <div className="relative z-[999999999999999]">
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick={true} pauseOnHover={true} draggable={true} theme="light" transition={Bounce} />
          </div>
          {children}
        </body>
      </html>
    </ActiveTabProvider>
  );
}
