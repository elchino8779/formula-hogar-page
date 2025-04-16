'use client';
import React, { useState } from 'react';
import styles from './Search.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [querySearch, setQuerySearch] = useState('');

  const router = useRouter();

  const handleChange = (e) => {
    setQuerySearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    querySearch.trim().length > 0 && router.push(`/search`);
    setQuerySearch('');
  };

  return (
    <form className={styles.search_container} onSubmit={handleSubmit}>
      <button>
        <Image
          src={'/images/iconos/search.png'}
          width={40}
          height={40}
          alt="search"
        />
      </button>
      <input
        type="text"
        value={querySearch}
        placeholder="Buscar..."
        onChange={handleChange}
        name="search"
        autoComplete="off"
      />
    </form>
  );
};

export default Search;
