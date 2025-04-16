import NavBarAdmin from '@/components/NavBarAdmin/NavBarAdmin';
import React from 'react';
import styles from './Layout.module.css';

const LayoutDashboard = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <NavBarAdmin />
      {children}
    </div>
  );
};

export default LayoutDashboard;
