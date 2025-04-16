'use client';
import React, { useState } from 'react';
import styles from './Admin.module.css';
import Image from 'next/image';

const page = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [iconPass, setIconPass] = useState(false);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user, pass);
  };

  const handleIconPass = () => {
    setIconPass(!iconPass);
  };

  return (
    <div className={styles.admin_container}>
      <Image
        className={styles.fondo_admin1}
        src="/images/productos/LogosAromas/logoOriginal.png"
        width={400}
        height={500}
        alt="imagen1"
      />
      <Image
        className={styles.fondo_admin2}
        src="/images/productos/LogosAromas/lineadeproductos2.png"
        width={600}
        height={700}
        alt="imagen2"
      />
      <form onSubmit={handleSubmit}>
        <p>Administración</p>
        <div className={styles.usuario}>
          <Image
            src={'/images/iconos/usuario.png'}
            width={30}
            height={30}
            alt="usuario"
          />
          <input
            type="text"
            placeholder="Usuario"
            className={styles.input}
            required={true}
            value={user}
            onChange={handleChange}
          />
        </div>
        <div className={styles.password}>
          <Image
            src={'/images/iconos/password.png'}
            width={30}
            height={30}
            alt="password"
          />
          <input
            type={iconPass ? 'text' : 'password'}
            placeholder="Contraseña"
            className={styles.input}
            required={true}
            value={pass}
            onChange={handlePassChange}
          />
          <Image
            className={styles.iconPass}
            src={
              iconPass
                ? '/images/iconos/visible.png'
                : '/images/iconos/oculto.png'
            }
            width={25}
            height={25}
            alt="visible"
            onClick={handleIconPass}
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default page;
