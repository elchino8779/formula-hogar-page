import React from 'react';
import styles from './BannerRedesSociales.module.css';
import Link from 'next/link';
import Image from 'next/image';

const BannerRedesSociales = () => {
  return (
    <div className={styles.redes_sociales_container}>
      <div className={styles.iconos_container}>
        <Link href="https://www.facebook.com/formulahogar" target="_blank">
          <Image
            src="/images/SocialMediaIcons/facebook.png"
            alt="Facebook"
            width={25}
            height={25}
          />
        </Link>
        <Link href="https://www.facebook.com/formulahogar" target="_blank">
          <Image
            src="/images/SocialMediaIcons/instagram.png"
            alt="Instagram"
            width={25}
            height={25}
          />
        </Link>
        <Link href="https://www.facebook.com/formulahogar" target="_blank">
          <Image
            src="/images/SocialMediaIcons/whatsapp.png"
            alt="Whatsapp"
            width={25}
            height={25}
          />
        </Link>
      </div>
    </div>
  );
};

export default BannerRedesSociales;
