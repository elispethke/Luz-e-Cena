import Logo from '../components/Logo';
import styles from './footer.module.css';


const FooterLogo = () => {
  return (
    <div className={styles.logo}>
        <Logo src="./Logo.png" alt="logo" />
        <p>Onde a Realidade Encontra a Fantasia</p>

    </div>
  )
}

export default FooterLogo;