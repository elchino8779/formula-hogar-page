'use client';
import React, { useEffect, useRef } from 'react';
import styles from './NosotrosInformacion.module.css';
import Image from 'next/image';
import Link from 'next/link';

const NosotrosInformacion = () => {
  const logoFormula = useRef();
  const somosFormula = useRef();
  const iconosFormula = useRef();
  const productosFormula = useRef();

  const observables = [
    logoFormula,
    somosFormula,
    iconosFormula,
    productosFormula,
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translate(0%)';
          entry.target.style.opacity = '1';
        } else {
          entry.target.classList.forEach((className) => {
            if (className.includes('nosotros_section')) {
              entry.target.style.transform = 'translateX(-20%)';
              entry.target.style.opacity = '0';
            } else if (className.includes('nosotros_productos')) {
              entry.target.style.transform = 'translateY(2%)';
              entry.target.style.opacity = '0';
            } else {
              entry.target.style.opacity = '0';
            }
          });
        }
      });
    });

    observables.forEach((observable) => {
      observer.observe(observable.current, {
        threshold: 0.3,
        delay: 300,
      });
    });
  }, []);

  return (
    <div className={styles.nosotros_container}>
      <section className={styles.nosotros_logo} ref={logoFormula}>
        <Image
          src={'/images/logos/FormulaHogarLogoSinFondo.png'}
          width={680}
          height={200}
          alt="logo"
        />
      </section>
      <section className={styles.nosotros_section} ref={somosFormula}>
        <Image
          className={styles.logo_original}
          src={'/images/nosotros/logoOriginal.png'}
          width={300}
          height={400}
          alt="logo"
        />
        <div className={styles.textos_section}>
          <h2>
            <b>Somos</b> una empresa nueva, nacida en Salta Capital en el año
            2018, con el objetivo de brindar soluciones efectivas para la
            limpieza, higiene y desinfección, de una manera profesional,
            accesible y confiable.
          </h2>
          <p>
            Contamos con nuestra exclusiva línea de productos, elaborada bajo
            estrictas normas de calidad, para abarcar dos tipos de segmentos,
            por un lado los hogares, y por el otro, industrias, comercios,
            organismos e instituciones, tales como: colegios, universidades,
            bancos, hoteles, moteles, gimnasios, clínicas, consultorios,
            oficinas, consorcios, comercios en general y organismos públicos.
          </p>
        </div>
      </section>
      <section className={styles.nosotros_iconos} ref={iconosFormula}>
        <div className={styles.icono_container}>
          <Image
            src={'/images/IconosSinFondo/envase.png'}
            width={120}
            height={135}
            alt="envase"
          />
          <p>Presentación de Productos: 5 litros y 20 litros próximamente</p>
        </div>
        <div className={styles.icono_container}>
          <p>Venta Mayorista y Minorista</p>
          <Image
            src={'/images/IconosSinFondo/carrito.png'}
            width={185}
            height={150}
            alt="carrito"
          />
        </div>
        <div className={styles.icono_container}>
          <Image
            src={'/images/IconosSinFondo/llamada.png'}
            width={165}
            height={125}
            alt="llamada"
          />
          <p>Atención y Asesoramiento Personalizado</p>
        </div>
        <div className={styles.icono_container}>
          <p>Entrega sin Cargo (Inmediata y Programada)</p>
          <Image
            src={'/images/IconosSinFondo/envio.png'}
            width={180}
            height={120}
            alt="envio"
          />
        </div>
        <div className={styles.icono_container}>
          <Image
            src={'/images/IconosSinFondo/dinero.png'}
            width={135}
            height={135}
            alt="dinero"
          />
          <p>Formas de Pago a Convenir</p>
        </div>
      </section>
      <section className={styles.nosotros_productos} ref={productosFormula}>
        <Link href="/productos/#alcohol_gel">
          <Image
            src={'/images/productos_home/Alcohol en Gel.jpeg'}
            width={300}
            height={300}
            alt="Alcohol en Gel"
          />
        </Link>
        <Link href="/productos/#antigrasa">
          <Image
            src={'/images/productos_home/Antigrasa.jpeg'}
            width={300}
            height={300}
            alt="Antigrasa"
          />
        </Link>
        <Link href="/productos/#cera_acrilica">
          <Image
            src={'/images/productos_home/Cera Acrilica.jpeg'}
            width={300}
            height={300}
            alt="Cera Acrilica"
          />
        </Link>
        <Link href="/productos/#detergente">
          <Image
            src={'/images/productos_home/Detergente.jpeg'}
            width={300}
            height={300}
            alt="Detergente"
          />
        </Link>
        <Link href="/productos/#jabon_liquido">
          <Image
            src={'/images/productos_home/Jabon Liquido.jpeg'}
            width={300}
            height={300}
            alt="Jabon Liquido"
          />
        </Link>
        <Link href="/productos/#lavandina">
          <Image
            src={'/images/productos_home/Lavandina.jpeg'}
            width={300}
            height={300}
            alt="Lavandina"
          />
        </Link>
        <Link href="/productos/#limpiador_de_pisos">
          <Image
            src={'/images/productos_home/Limpiador de Pisos.jpeg'}
            width={300}
            height={300}
            alt="Limpiador de Pisos"
          />
        </Link>
        <Link href="/productos/#liquido_desinfectante">
          <Image
            src={'/images/productos_home/Liquido Desinfectante.jpeg'}
            width={300}
            height={300}
            alt="Liquido Desinfectante"
          />
        </Link>
        <Link href="/productos/#shampoo_para_manos">
          <Image
            src={'/images/productos_home/Shampoo para Manos.jpeg'}
            width={300}
            height={300}
            alt="Shampoo para Manos"
          />
        </Link>
        <Link href="/productos/#suavizante">
          <Image
            src={'/images/productos_home/Suavizante.jpeg'}
            width={300}
            height={300}
            alt="Suavizante"
          />
        </Link>
      </section>
    </div>
  );
};

export default NosotrosInformacion;
