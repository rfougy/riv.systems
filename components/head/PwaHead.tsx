const PwaHead: React.FC = () => {
  return (
    <>
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
      />
      <meta name="application-name" content="RIV.SYSTEMS" />
      <meta name="theme-color" content="#101010" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="RIV.SYSTEMS" />
      <link
        rel="apple-touch-icon"
        href="/icons/maskable/maskable_icon_x192.png"
      />
    </>
  );
};

export default PwaHead;
