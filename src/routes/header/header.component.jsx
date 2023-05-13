import { Link, NavLink } from "react-router-dom";
import { ReactComponent as UltraLogo } from "../../assets/ultraLogo.svg";

import styles from './header.module.scss'

// const Header = () => {
//     return (
//         <div className={Styles.navigation}>
//             <Link className={Styles.logoContainer} to='/'>
//                 <UltraLogo className={Styles.logo}/>
//             </Link>
//             <div className={Styles.linksContainer}>
//                 <Link className={Styles.navLink} to='/page2'>
//                     page2
//                 </Link>
//             </div>
//         </div>
//     );
// }

const Header = () => {
    const activeClassName = ({isActive}) => (isActive ? styles.link + " " + styles.activeLink : styles.link)

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link className={styles.logoContainer} to='/'>
                    <UltraLogo className={styles.logo} />
                </Link>
                <nav className={styles.navigation}>
                    <NavLink exact to="/" className={activeClassName}>Home</NavLink>
                    <NavLink to="/page2" className={activeClassName}>Page2</NavLink>
                    <NavLink to="/services" className={activeClassName}>Services</NavLink>
                    <NavLink to="/contact" className={activeClassName}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;