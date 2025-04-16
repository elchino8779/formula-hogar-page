'use client';
import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Image from 'next/image';
import CardProductAdmin from '@/components/CardProductAdmin/CardProductAdmin';

const productos = [
  {
    id: 1,
    producto: 'Alcohol en Gel',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_alcoholgel.png',
    img_thumb: '/images/productos/LogosAromas/colores_alcoholgel.png',
    descripcion:
      'Gel antibacterial sin acción terapéutica, a base de alcohol etílico, incoloro y sin perfume. Fórmula con alto contenido de alcohol que elimina eficazmente el 99.9% de bacterias y gérmenes sin necesidad de enjuague. Su textura en gel permite una aplicación fácil y rápida, dejando las manos limpias y frescas sin sensación pegajosa. Enriquecido con agentes humectantes para proteger la piel, es ideal para el uso diario en el hogar, la oficina o en movimiento.',
    oferta: true,
    contenido: '5lts',
  },
  {
    id: 2,
    producto: 'Antigrasa',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_antigrasa.png',
    img_thumb: '/images/productos/LogosAromas/colores_antigrasa.png',
    descripcion:
      'Máxima protección y alto poder de desinfección para baños, pisos, azulejos, mesadas, vajillas, baldes de residuos, etc. Limpia y desinfecta a fondo. Apto para remover manchas.',
    oferta: false,
    contenido: '5lts',
  },
  {
    id: 3,
    producto: 'Cera Acrilica',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_antigrasa.png',
    img_thumb: '/images/productos/LogosAromas/colores_antigrasa.png',
    descripcion:
      'Otorga a sus pisos brillo instantáneo y resistente. Fácil de aplicar, dejando un agradable perfume. Utilizar con carro o mopa. Aplicar puro o diluido hasta una tercera parte sobre el piso.',
    oferta: false,
    contenido: '5lts',
  },
  {
    id: 4,
    producto: 'Lavandina',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_lavanidina.png',
    img_thumb: '/images/productos/LogosAromas/colores_lavanidina.png',
    descripcion:
      'Máxima protección y alto poder de desinfección para baños, pisos, azulejos, mesadas, vajillas, baldes de residuos, etc. Limpia y desinfecta a fondo. Apto para remover manchas.',
    oferta: true,
    contenido: '5lts',
  },
  {
    id: 5,
    producto: 'Limpiador de Pisos',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_limpiadordepisos.png',
    img_thumb: '/images/productos/LogosAromas/colores_limpiadordepisos.png',
    descripcion:
      'Líquido aromatizante, desodoriza eliminando malos olores. Desinfecta y desengrasa, pisos y superficies lavables. Nuestra fórmula es aplicable en pisos, mosaicos, cerámicos, porcelanatos, baldosas, lajas y plastificados.',
    oferta: false,
    contenido: '5lts',
  },
  {
    id: 6,
    producto: 'Shampoo para Manos',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_shampoomanoros.png',
    img_thumb: '/images/productos/LogosAromas/colores_shampoomanoros.png',
    descripcion:
      'El shampoo para manos o jabón líquido esta formulado para el lavado de manos. Su exclusiva fórmula equilibra limpieza y desengrasa con humectación para no resecar la piel y dejarla suave con una agradable fragancia recomendada para una ideal higiene, realizando una desinfección profunda y protegiéndola de agentes extraños.',
    oferta: false,
    contenido: '5lts',
  },
  {
    id: 7,
    producto: 'Suavizante',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_suavizante.png',
    img_thumb: '/images/productos/LogosAromas/colores_suavizante.png',
    descripcion:
      'Tu ropa y la de tu familia permanecerán perfumadas, suaves y cómodas. Resaltando sus olores y facilitando el planchado de las prendas. Apto para el lavado de prendas semi delicadas y delicadas, ropa blanca, toallas, manteles, etc. Dejando un agradable y persistente aroma residual. Evita la electricidad estática en fibras sintéticas.',
    oferta: false,
    contenido: '5lts',
  },
  {
    id: 8,
    producto: 'Shampoo para Autos',
    precio: '100',
    img_url: '/images/productos/LogosAromas/colores_shampooautos.png',
    img_thumb: '/images/productos/LogosAromas/colores_shampooautos.png',
    descripcion:
      'Lavacoche siliconado apto para todo tipo de pinturas. Ultra brillo + Resaltador de color. Fórmula avanzada diseñada para eliminar suciedad, polvo y residuos sin dañar la pintura ni la capa protectora del vehículo. Su acción espumante facilita el lavado, proporcionando un acabado brillante y sin marcas. Ideal para uso doméstico y profesional, asegurando una limpieza profunda con el máximo cuidado.',
    oferta: true,
    contenido: '5lts',
  },
];

const formInit = {
  nombre: '',
  precio: '',
  descripcion: '',
  oferta: false,
  imagen_url: '/images/iconos/agregar_imagen.png',
};

const Dashboard = () => {
  const [modalAgregarProducto, setModalAgregarProducto] = useState(false);
  const [modalEditarProducto, setModalEditarProducto] = useState(false);
  const [form, setForm] = useState(formInit);

  const abrirModalAgregarProducto = () => {
    setModalAgregarProducto(true);
  };

  const cerrarModalAgregarProducto = () => {
    setForm(formInit);
    setModalAgregarProducto(false);
  };

  const abrirModalEditarProducto = (producto) => {
    setModalEditarProducto(true);
    setForm({
      ...form,
      nombre: producto.producto,
      descripcion: producto.descripcion,
      precio: producto.precio,
      oferta: producto.oferta,
      imagen_url:
        producto.img_url == '/images/iconos/agregar_imagen.png'
          ? '/images/iconos/agregar_imagen.png'
          : producto.img_url,
    });
    console.log(form);
  };

  const cerrarModalEditarProducto = () => {
    setForm(formInit);
    setModalEditarProducto(false);
  };

  const handleSubmitEditarProducto = (e) => {
    e.preventDefault();
    setForm(formInit);
    setModalEditarProducto(false);
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckChange = (e) => {
    setForm({ ...form, oferta: e.target.checked });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setForm({
          ...form,
          imagen_url: e.target.result,
        });
      };
      reader.onloadend = () => {
        e.target.value = null;
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cerrarModalAgregarProducto();
    console.log(form);
  };

  return (
    <div className={styles.dashboard_container}>
      <>
        {modalAgregarProducto && (
          <div className={styles.modal_agregar_producto_container}>
            <div className={styles.information_container}>
              <div className={styles.title_button}>
                <h2>Agregar Producto</h2>
                <button onClick={cerrarModalAgregarProducto}>
                  <Image
                    src="/images/iconos/cancelar.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <div className={styles.image_container}>
                <input
                  className={styles.input_file}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label
                  className={styles.image_back}
                  htmlFor="image"
                  style={{
                    backgroundImage: `url(${form.imagen_url})`,
                  }}
                ></label>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nombre del producto"
                  required={true}
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Descripcion"
                  required={true}
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                />
                <div className={styles.precio_oferta}>
                  <input
                    className={styles.input_number}
                    type="number"
                    placeholder="Precio"
                    required={true}
                    name="precio"
                    value={form.precio}
                    onChange={handleChange}
                  />
                  <div className={styles.check_oferta_container}>
                    <label
                      htmlFor="oferta"
                      style={
                        form.oferta == true
                          ? { color: '#000000' }
                          : { color: '#757575' }
                      }
                    >
                      Oferta
                    </label>
                    <input
                      className={styles.input_check}
                      type="checkbox"
                      name="oferta"
                      id="oferta"
                      value={form.oferta}
                      checked={form.oferta}
                      onChange={handleCheckChange}
                    />
                  </div>
                </div>
                <div className={styles.custom_loader}></div>
                <button className={styles.agregar_producto}>Agregar</button>
              </form>
            </div>
          </div>
        )}
      </>
      <>
        {modalEditarProducto && (
          <div className={styles.modal_agregar_producto_container}>
            <div className={styles.information_container}>
              <div className={styles.title_button}>
                <h2>Editar Producto</h2>
                <button onClick={cerrarModalEditarProducto}>
                  <Image
                    src="/images/iconos/cancelar.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <div className={styles.image_container}>
                <input
                  className={styles.input_file}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label
                  className={styles.image_back}
                  htmlFor="image"
                  style={{
                    backgroundImage: `url(${form.imagen_url})`,
                  }}
                ></label>
              </div>
              <form
                className={styles.form}
                onSubmit={handleSubmitEditarProducto}
              >
                <input
                  type="text"
                  placeholder="Nombre del producto"
                  required={true}
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Descripcion"
                  required={true}
                  name="descripcion"
                  value={form.descripcion}
                  onChange={handleChange}
                />
                <div className={styles.precio_oferta}>
                  <input
                    className={styles.input_number}
                    type="number"
                    placeholder="Precio"
                    required={true}
                    name="precio"
                    value={form.precio}
                    onChange={handleChange}
                  />
                  <div className={styles.check_oferta_container}>
                    <label
                      htmlFor="oferta"
                      style={
                        form.oferta == true
                          ? { color: '#000000' }
                          : { color: '#757575' }
                      }
                    >
                      Oferta
                    </label>
                    <input
                      className={styles.input_check}
                      type="checkbox"
                      name="oferta"
                      id="oferta"
                      value={form.oferta}
                      checked={form.oferta}
                      onChange={handleCheckChange}
                    />
                  </div>
                </div>
                <div className={styles.custom_loader}></div>
                <button className={styles.agregar_producto}>Editar</button>
              </form>
            </div>
          </div>
        )}
      </>
      <div className={styles.productos_container}>
        <button onClick={abrirModalAgregarProducto}>
          <Image
            src="/images/iconos/sumar_producto.png"
            alt="logo"
            width={100}
            height={100}
          />
        </button>
        {productos.map((producto) => {
          return (
            <CardProductAdmin
              key={producto.id}
              producto={producto}
              abrirModalAgregarProducto={abrirModalEditarProducto}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
