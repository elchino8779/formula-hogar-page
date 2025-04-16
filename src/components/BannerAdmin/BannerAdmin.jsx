import React from 'react';
import styles from './BannerAdmin.module.css';
import Image from 'next/image';

const BannerAdmin = ({ banner, abrirModalEditarBanner }) => {
  return (
    <div className={styles.bannerAdmin_container}>
      <div className={styles.button_container}>
        <button onClick={() => abrirModalEditarBanner(banner)}>
          <Image
            src="/images/iconos/editar.png"
            alt="logo"
            width={35}
            height={35}
          />
        </button>
        <button>
          <Image
            src="/images/iconos/eliminar.png"
            alt="logo"
            width={35}
            height={35}
          />
        </button>
      </div>
      <p>{banner.titulo}</p>
      <Image
        className={styles.banner_image}
        src={banner.url_img}
        alt="banner"
        width={1000}
        height={300}
      />
    </div>
  );
};

export default BannerAdmin;
