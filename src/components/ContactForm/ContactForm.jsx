'use client';
import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import Link from 'next/link';
import Image from 'next/image';

const clearForm = {
  nombre: '',
  direccion: '',
  telefono: '',
  email: '',
  mensaje: '',
};

const ContactForm = () => {
  const [dates, setDates] = useState(clearForm);

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dates);
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.social_media_container}>
        <Link href="https://www.facebook.com" target="_blank">
          <Image
            src="/images/SocialMediaIcons/facebook_rosa.png"
            width={80}
            height={80}
            alt="Facebook"
          />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image
            src="/images/SocialMediaIcons/instagram_rosa.png"
            width={80}
            height={80}
            alt="Instagram"
          />
        </Link>
        <Link href="mailto:andres_gomez87@outlook.com" target="_blank">
          <Image
            src="/images/SocialMediaIcons/correo_rosa.png"
            width={80}
            height={80}
            alt="Correo"
          />
        </Link>
        <Link
          href="https://wa.me/3874735619/?text=Quiero%20recibir%20más%20información%20sobre%20sus%20productos!"
          target="_blank"
        >
          <Image
            src="/images/SocialMediaIcons/whatsapp_rosa.png"
            width={80}
            height={80}
            alt="Whatsapp"
          />
        </Link>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre / Empresa"
          name="nombre"
          className={styles.input}
          required={true}
          value={dates.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Dirección"
          name="direccion"
          className={styles.input}
          required={true}
          value={dates.direccion}
          onChange={handleChange}
        />
        <input
          className={styles.input_number}
          type="number"
          placeholder="Teléfono"
          name="telefono"
          required={true}
          value={dates.telefono}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={styles.input}
          required={true}
          value={dates.email}
          onChange={handleChange}
          autoComplete={'on'}
        />
        <textarea
          placeholder="Quiero recibir más información sobre sus productos!"
          name="mensaje"
          className={styles.input}
          required={true}
          value={dates.mensaje}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
