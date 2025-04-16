'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';
import Image from 'next/image';

const Slider = () => {
  const [imageView, setImageView] = useState(0);
  const imageHeight = useRef(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleClickPoint = (index) => {
    setImageView(index);
  };

  useEffect(() => {
    // const handleResize = () => {
    //   setContainerHeight(imageHeight.current.offsetHeight);
    // };
    // window.addEventListener('resize', handleResize);
    // handleResize();
    const interval = setInterval(() => {
      setImageView((prevState) => (prevState + 1) % 5);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider_container}>
      <div className={styles.images}>
        <div className={styles.points_slider_container}>
          <div
            className={imageView == 0 ? styles.point : styles.point_no_view}
            onClick={() => handleClickPoint(0)}
          ></div>
          <div
            className={imageView == 1 ? styles.point : styles.point_no_view}
            onClick={() => handleClickPoint(1)}
          ></div>
          <div
            className={imageView == 2 ? styles.point : styles.point_no_view}
            onClick={() => handleClickPoint(2)}
          ></div>
          <div
            className={imageView == 3 ? styles.point : styles.point_no_view}
            onClick={() => handleClickPoint(3)}
          ></div>
          <div
            className={imageView == 4 ? styles.point : styles.point_no_view}
            onClick={() => handleClickPoint(4)}
          ></div>
        </div>
        <Image
          ref={imageHeight}
          className={imageView == 0 ? styles.image_view : styles.image_no_view}
          src={'/images/banners/banner1.png'}
          width={1750}
          height={500}
          alt="banner1"
        />
        <Image
          className={imageView == 1 ? styles.image_view : styles.image_no_view}
          src={'/images/banners/banner2.png'}
          width={1750}
          height={500}
          alt="banner2"
        />
        <Image
          className={imageView == 2 ? styles.image_view : styles.image_no_view}
          src={'/images/banners/banner3.png'}
          width={1750}
          height={500}
          alt="banner3"
        />
        <Image
          className={imageView == 3 ? styles.image_view : styles.image_no_view}
          src={'/images/banners/banner4.png'}
          width={1750}
          height={500}
          alt="banner4"
        />
        <Image
          className={imageView == 4 ? styles.image_view : styles.image_no_view}
          src={'/images/banners/banner5.png'}
          width={1750}
          height={500}
          alt="banner5"
        />
      </div>
    </div>
  );
};

export default Slider;
