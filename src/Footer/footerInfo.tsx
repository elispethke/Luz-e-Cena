import styles from './footer.module.css';

const FooterInfo = () => {
 return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Funcionamento</h4>
        <span>Segunda a Sexta - 16h ás 00h</span>
        <span>luz@cena.com</span>
        <span>0123 4567</span>
    </div>
 );
};

export default FooterInfo;