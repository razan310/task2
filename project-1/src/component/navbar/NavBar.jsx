import { useState } from 'react';
import styles from "./navbar.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className={styles.top_bar}>
                <div className={styles.contact_info}>
                    <span><i className="fas fa-envelope"></i> info@company.com</span>
                    <span><i className="fas fa-map-marker-alt"></i> Sunny Isles Beach, FL 33160</span>
                </div>
                <div className={styles.social_icons}>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.navbar_brand}>
                    <h1>VILLA</h1>
                </div>
                <div className={styles.menu_toggle} onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
                <div className={`${styles.navbar_menu} ${menuOpen ? styles.active : ''}`}>
                    <ul className={styles.navbar_links}>
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/properties">Properties</a></li>
                        <li><a href="/property-details">Property Details</a></li>
                        <li><a href="/contact-us">Contact Us</a></li>
                    </ul>
                    <div className={styles.schedule_button}>
                        <a href="#" className={styles.btn_schedule}>Schedule a visit</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
