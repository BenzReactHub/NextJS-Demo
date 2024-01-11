import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P8ER86JVW2"
      />
      {/* beforeInteractive的意思是下面的代碼在Next.js進入點注入，也稱為hydration */}
      {/* <Script id="googleTag" strategy="beforeInteractive"> */}
      <Script id="googleTag">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-P8ER86JVW2');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
