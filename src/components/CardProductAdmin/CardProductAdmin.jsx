import React from 'react';
import styles from './CardProductAdmin.module.css';
import Image from 'next/image';

const CardProductAdmin = ({ producto, abrirModalAgregarProducto }) => {
  return (
    <div className={styles.card_product_container}>
      <>
        {producto.oferta && (
          <p className={styles.oferta}>Aprovecha la oferta!</p>
        )}
      </>
      <div className={styles.card_informacion}>
        <h2>{producto.producto}</h2>
        <p>{producto.descripcion}</p>
        <Image src={producto.img_url} width={100} height={100} alt="producto" />
        <div className={styles.precio_botones}>
          <p>${producto.precio}</p>
          <div className={styles.botones_container}>
            <button onClick={() => abrirModalAgregarProducto(producto)}>
              <Image
                src={'/images/iconos/editar.png'}
                width={35}
                height={35}
                alt="editar"
              />
            </button>
            <button>
              <Image
                src={'/images/iconos/eliminar.png'}
                width={35}
                height={35}
                alt="eliminar"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductAdmin;
