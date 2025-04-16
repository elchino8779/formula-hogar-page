import styles from './page.module.css';
import Slider from '@/components/Slider/Slider';
import CardInformacion from '@/components/CardInformacion/CardInformacion';
import NosotrosInformacion from '@/components/NosotrosInformacion/NosotrosInformacion';

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Slider />
      <NosotrosInformacion />
      <CardInformacion />
    </div>
  );
}
