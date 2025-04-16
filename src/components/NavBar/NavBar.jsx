'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Search from '../Search/Search';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const path = usePathname();
  const burger = useRef();
  const router = useRouter();
  const [menuDesplegable, setMenuDesplegable] = useState(false);
  const [querySearch, setQuerySearch] = useState('');

  const handleMenuDesplegable = (e) => {
    setMenuDesplegable(e.target.checked);
    setQuerySearch('');
  };

  const handleLink = (e) => {
    burger.current.checked = false;
    setMenuDesplegable(false);
    setQuerySearch('');
  };

  const handleChangeSearchDesplegable = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleSubmitDesplegable = (e) => {
    e.preventDefault();
    querySearch.trim().length > 0 && router.push(`/search`);
    setQuerySearch('');
    burger.current.checked = false;
    setMenuDesplegable(false);
  };

  return (
    <div className={styles.navbar}>
      <div
        className={
          menuDesplegable
            ? styles.menu_desplegable_container
            : styles.menu_desplegable_container_none
        }
      >
        <div className={styles.menu_desplegable_links_container}>
          <form
            className={styles.search_menu_desplegable_container}
            onSubmit={handleSubmitDesplegable}
          >
            <input
              className={styles.input_search_menu_desplegable}
              type="text"
              name="search_desplegable"
              value={querySearch}
              onChange={handleChangeSearchDesplegable}
              placeholder="Buscar..."
              autoComplete="off"
            />
          </form>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/'}
          >
            Inicio
          </Link>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/productos'}
          >
            Productos
          </Link>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/pedidos'}
          >
            Pedidos
          </Link>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/contacto'}
          >
            Contacto
          </Link>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/carrito'}
          >
            Carrito
          </Link>
          <Link
            onClick={handleLink}
            className={styles.link_menu_desplegable}
            href={'/admin/dashboard'}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <div className={styles.logo_container}>
        <Image
          className={styles.logo}
          src={'/images/logos/FormulaHogarLogoBlancoSinFondo.png'}
          width={190}
          height={50}
          alt="logo"
        />
      </div>
      <div className={styles.link_container}>
        <Link className={path == '/' ? styles.link_active : ''} href="/">
          Inicio
        </Link>
        <Link
          className={path == '/productos' ? styles.link_active : ''}
          href="/productos"
        >
          Productos
        </Link>
        <Link
          className={path == '/pedidos' ? styles.link_active : ''}
          href="/pedidos"
        >
          Pedidos
        </Link>
        <Link
          className={path == '/contacto' ? styles.link_active : ''}
          href="/contacto"
        >
          Contacto
        </Link>
        <Link
          className={
            path == '/admin/dashboard' || path == '/admin/dashboard/banners'
              ? styles.link_active
              : ''
          }
          href="/admin/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={path == '/carrito' ? styles.icono_carrito : ''}
          href="/carrito"
        >
          <Image
            src={'/images/iconos/carrito.png'}
            width={30}
            height={30}
            alt="carrito"
          />
        </Link>
      </div>
      <Search />
      <label className={styles.burger} htmlFor="burger">
        <input
          ref={burger}
          type="checkbox"
          id="burger"
          onChange={handleMenuDesplegable}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
  );
};

export default NavBar;
