import React, { useEffect } from 'react';

import Link from 'next/link';

const TiendaQR = () => {
  useEffect(() => {
    const redirect = () => {
      const userAgent = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);
      const isAndroid = /Android/.test(userAgent);
      if (isIOS) {
        window.location.href = 'https://apps.apple.com/do/app/qr-reader-venapp/id6446603104?l=en';
      } else if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.techandpeople.readerqrven.app';
      }
    };
    redirect();
  }, [])

  return (
    <div>
      <Link href="/">
      <h1>Redireccionando...</h1>
      </Link>
    </div>
  );
};

export default TiendaQR;