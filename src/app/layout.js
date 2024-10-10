import { Inter } from "next/font/google";
import "../../public/js/css2.css";
import "../../public/js/bootstrap.min.css";
import "../../public/css/crayons5.css";
// import "../../public/css/inner-page.css";
import "../../public/css/responsive2.css";
// import "../../public/js/owl.carousel.min.css"
import Head from "next/head";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Bootstrap 5.3.2 CDN */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-w76A8iA19I8h0QqOTW0kmk8l6F2C6t5C7L1WwABmFOA95lWloLoxw6s9ggpcckZm"
          crossorigin="anonymous"
        />
      </Head>
      <Script id="gtm" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NGWS74H');
      `}
      </Script>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NGWS74H" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
