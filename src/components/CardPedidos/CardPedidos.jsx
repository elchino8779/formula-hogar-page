'use client';
import React, { useState } from 'react';
import styles from './CardPedidos.module.css';
import Image from 'next/image';

const CardPedidos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = (e) => {
    e.stopPropagation();
    setCantidad(cantidad + 1);
  };

  const handleRestar = (e) => {
    e.stopPropagation();
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAgregarCarrito = (e) => {
    e.stopPropagation();
    console.log('Agregar al carrito ' + producto.id);
  };

  return (
    <div className={styles.card_pedidos_container}>
      <>
        {producto.oferta && (
          <p className={styles.oferta}>Aprovecha la oferta!</p>
        )}
      </>
      <div className={styles.card_informacion}>
        <h2>{producto.producto}</h2>
        <p>{producto.descripcion}</p>
        <Image src={producto.img_url} width={100} height={100} alt="producto" />
        <div className={styles.precio_cantidad}>
          <p>${producto.precio}</p>
          <div className={styles.cantidad_container}>
            <Image
              onClick={handleRestar}
              src={'/images/iconos/restar.png'}
              width={20}
              height={20}
              alt="restar"
            />
            <input
              className={styles.cantidad_productos}
              type="text"
              value={cantidad}
              disabled
              name="cantidad"
            />
            <Image
              onClick={handleSumar}
              src={'/images/iconos/sumar.png'}
              width={20}
              height={20}
              alt="sumar"
            />
          </div>
        </div>
        <button onClick={handleAgregarCarrito}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardPedidos;
