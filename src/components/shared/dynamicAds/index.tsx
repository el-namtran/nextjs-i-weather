import React from "react";

const adScript = `
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3958818287602115"
    crossOrigin="anonymous"
    strategy="lazyOnload"
  />
  <ins
    className="adsbygoogle"
    style={{ display: "block !important", width: "100px", height: "200px" }}
    data-ad-client="ca-pub-3958818287602115"
    data-ad-slot="9449396794"
    data-ad-format="auto"
    data-full-width-responsive="true"
  ></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
`;

const DynamicAds = () => (
  <div dangerouslySetInnerHTML={{ __html: adScript }} />
);

export default DynamicAds;
