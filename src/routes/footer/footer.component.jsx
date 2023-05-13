import { Link } from 'react-router-dom';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <Link to="/faq" className={styles.footerLink}>FAQ</Link>
                    <Link to="/terms" className={styles.footerLink}>Terms and Conditions</Link>
                    <Link to="/privacy" className={styles.footerLink}>Privacy Policy</Link>
                </div>
                <div className={styles.footerCopy}>
                    <p>&copy; {new Date().getFullYear()} Ultra Textile Printing. All rights reserved.</p>
                    <p>123 Main Street, Cityville, State, Country</p>
                    <p>Email: info@ultratextileprinting.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;