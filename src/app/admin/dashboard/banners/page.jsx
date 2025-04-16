'use client';
import React, { useState } from 'react';
import styles from './Banners.module.css';
import BannerAdmin from '@/components/BannerAdmin/BannerAdmin';
import Image from 'next/image';

const banners = [
  {
    id: 1,
    titulo: 'Banner 1',
    url_img: '/images/banners/banner1.png',
  },
  {
    id: 2,
    titulo: 'Banner 2',
    url_img: '/images/banners/banner2.png',
  },
  {
    id: 3,
    titulo: 'Banner 3',
    url_img: '/images/banners/banner3.png',
  },
  {
    id: 4,
    titulo: 'Banner 4',
    url_img: '/images/banners/banner4.png',
  },
  {
    id: 5,
    titulo: 'Banner 5',
    url_img: '/images/banners/banner5.png',
  },
];

const formInit = {
  titulo: '',
  imagen_url: '/images/iconos/agregar_banner.png',
};

const Banners = () => {
  const [modalAgregarBanner, setModalAgregarBanner] = useState(false);
  const [modalEditarBanner, setModalEditarBanner] = useState(false);
  const [form, setForm] = useState(formInit);

  const abrirModalAgregarBanner = () => {
    setModalAgregarBanner(true);
  };

  const cerrarModalAgregarBanner = () => {
    setModalAgregarBanner(false);
    setForm(formInit);
  };

  const abrirModalEditarBanner = (banner) => {
    setModalEditarBanner(true);
    setForm({
      ...form,
      titulo: banner.titulo,
      imagen_url:
        banner.url_img == '/images/iconos/agregar_banner.png'
          ? '/images/iconos/agregar_banner.png'
          : banner.url_img,
    });
    console.log(form);
  };

  const cerrarModalEditarBanner = () => {
    setForm(formInit);
    setModalEditarBanner(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    cerrarModalAgregarBanner();
    console.log(form);
  };

  const handleSubmitEditarBanner = (e) => {
    e.preventDefault();
    setForm(formInit);
    setModalEditarBanner(false);
    console.log(form);
  };

  return (
    <div className={styles.banners_page}>
      <>
        {modalAgregarBanner && (
          <div className={styles.modal_agregar_banner_container}>
            <div className={styles.modal_information_container}>
              <div className={styles.modal_title_button}>
                <h2>Agregar Banner</h2>
                <button
                  className={styles.modal_boton_cancelar}
                  onClick={cerrarModalAgregarBanner}
                >
                  <Image
                    src="/images/iconos/cancelar.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <div className={styles.modal_image_container}>
                <input
                  className={styles.modal_input_file}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label
                  className={styles.modal_image_back}
                  htmlFor="image"
                  style={{
                    backgroundImage: `url(${form.imagen_url})`,
                  }}
                ></label>
              </div>
              <form className={styles.modal_form} onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Titulo"
                  required={true}
                  value={form.titulo}
                  onChange={handleChange}
                />
                <div className={styles.custom_loader}></div>
                <button className={styles.agregar_banner_button}>
                  Agregar
                </button>
              </form>
            </div>
          </div>
        )}
      </>
      <>
        {modalEditarBanner && (
          <div className={styles.modal_agregar_banner_container}>
            <div className={styles.modal_information_container}>
              <div className={styles.modal_title_button}>
                <h2>Editar Banner</h2>
                <button
                  className={styles.modal_boton_cancelar}
                  onClick={cerrarModalEditarBanner}
                >
                  <Image
                    src="/images/iconos/cancelar.png"
                    alt="logo"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <div className={styles.modal_image_container}>
                <input
                  className={styles.modal_input_file}
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <label
                  className={styles.modal_image_back}
                  htmlFor="image"
                  style={{
                    backgroundImage: `url(${form.imagen_url})`,
                  }}
                ></label>
              </div>
              <form
                className={styles.modal_form}
                onSubmit={handleSubmitEditarBanner}
              >
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Titulo"
                  required={true}
                  value={form.titulo}
                  onChange={handleChange}
                />
                <div className={styles.custom_loader}></div>
                <button className={styles.agregar_banner_button}>
                  Agregar
                </button>
              </form>
            </div>
          </div>
        )}
      </>
      <div className={styles.agregar_producto_container}>
        <button
          className={styles.button_agregar}
          onClick={abrirModalAgregarBanner}
        >
          <Image
            className={styles.button_agregar_imagen}
            src="/images/iconos/sumar_producto.png"
            alt="logo"
            width={100}
            height={100}
          />
        </button>
      </div>
      {banners.map((banner) => {
        return (
          <BannerAdmin
            key={banner.id}
            banner={banner}
            abrirModalEditarBanner={abrirModalEditarBanner}
          />
        );
      })}
    </div>
  );
};

export default Banners;
