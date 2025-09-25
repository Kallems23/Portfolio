import InitScroll from "@/components/scroll/InitScroll";
import "./globals/styles.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Urbanist } from "next/font/google";
import LenisSmoothScroll from "@/components/scroll/LenisSmoothScroll";
import { ServiceProvider } from "@/contexts/ServiceContext";
import ServicePopup from "@/components/modals/ServicePopup";
import ScrollTop from "@/components/scroll/ScrollTop";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blayden - Personal Portfolio & Resume React Nextjs Template",
  description: "Blayden - Personal Portfolio & Resume React Nextjs Template",
};

const setColorSchemeScript = `
(function() {
  try {
    var scheme = localStorage.getItem('color-scheme') || 'light';
    document.documentElement.setAttribute('color-scheme', scheme);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      color-scheme="dark"
      suppressHydrationWarning
      className="js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers no-applicationcache svg inlinesvg smil svgclippaths"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: setColorSchemeScript }} />
      </head>
      <body className={urbanist.variable}>
        <ServiceProvider>
          {children}
          <LenisSmoothScroll />
          <ScrollTop />
          {/* Global popup rendered after body content so it's not nested inside specific sections */}
          <ServicePopup />
          <InitScroll />
        </ServiceProvider>
      </body>
    </html>
  );
}
