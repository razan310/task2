import styles from './Featured.module.css'; 

import propertyImage from './../../assets/images/featured.jpg'; 
import propertyIcon from './../../assets/images/featured-icon.png';
import icon1 from './../../assets/images/info-icon-01.png'; 
import icon2 from './../../assets/images/info-icon-02.png'; 
import icon3 from './../../assets/images/info-icon-03.png'; 
import icon4 from './../../assets/images/info-icon-04.png'; 

const Featured = () => {
    return (
        <div className={styles.propertyCard}>
            <div className={styles.propertyImageContainer}>
                <img src={propertyImage} alt="Property" className={styles.propertyImage} />
                <div className={styles.propertyImageIconContainer}>
                    <img src={propertyIcon} alt="PropertyIcon" className={styles.propertyImageIcon} />
                </div>
            </div>
            <div className={styles.propertyDetails}>
                <span className={styles.featured}>| FEATURED</span>
                <h1 className={styles.title}>Best<br/>Appartment &<br/>Sea View</h1>
            
                <div className={styles.propertyDetailsDiv}>
                    <p className={styles.bestLinksTitle}>Best useful links?</p>
                    <hr className={styles.hrstyle}/>
                    <p className={styles.bestLinks}>
                        Get <span className={styles.span_1}>the best villa</span> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <span className={styles.span_2}>best free CSS templates</span> in the world. Please tell your friends about it.
                    </p>
                    <ul className={styles.linksList}>
                        <li>How does this work?</li>
                        <hr className={styles.hrstyle}/>
                        <li>Why is Villa Agency the best?</li>
                    </ul>
                </div>
            </div>

            <div className={styles.propertyIcons}>
                <div className={styles.iconCard}>
                    <img src={icon1} alt="Icon 1" className={styles.iconImage} />
                    <p>250 m2<br/><span>Total Flat Space</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon2} alt="Icon 2" className={styles.iconImage} />
                    <p>Contract<br/><span>Contract Ready</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon3} alt="Icon 3" className={styles.iconImage} />
                    <p>Payment<br/><span>Payment <br/>Process</span></p>
                    
                </div>
                <hr className={styles.propertyIconsline}/>
                <div className={styles.iconCard}>
                    <img src={icon4} alt="Icon 4" className={styles.iconImage} />
                    <p>Safety<br/><span>24/7 Under <br/>Control</span></p>
                    
                </div>
            </div>
        </div>
    );
}

export default Featured;
