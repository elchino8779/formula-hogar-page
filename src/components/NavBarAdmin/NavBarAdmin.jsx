'use client';
import React from 'react';
import styles from './NavBarAdmin.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBarAdmin = () => {
  const path = usePathname();

  return (
    <div className={styles.navbar_admin_container}>
      <div className={styles.link_container}>
        <Link
          className={path == '/admin/dashboard' ? styles.link_active : ''}
          href="/admin/dashboard/"
        >
          Productos
        </Link>
      </div>
      <div className={styles.link_container}>
        <Link
          className={
            path == '/admin/dashboard/banners' ? styles.link_active : ''
          }
          href="/admin/dashboard/banners"
        >
          Banners
        </Link>
      </div>
    </div>
  );
};

export default NavBarAdmin;
