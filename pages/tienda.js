import React, { useEffect } from 'react';

import Link from 'next/link';

const Tienda = () => {
  useEffect(() => {
    const redirect = () => {
      const userAgent = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent);
      const isAndroid = /Android/.test(userAgent);
      if (isIOS) {
        window.location.href = 'https://apps.apple.com/us/app/venapp/id1584649053';
      } else if (isAndroid) {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.techandpeople.techchat.app&hl=en_US&gl=US&pli=1';
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

export default Tienda;