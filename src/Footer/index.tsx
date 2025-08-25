import styles from './footer.module.css';
import FooterInfo from './footerInfo';
import FooterLogo from './footerLogo';

const Footer = () => {
    return(
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
            <FooterLogo />
            <FooterInfo />
          

        </div>

      </footer>
    );
};

export default Footer;