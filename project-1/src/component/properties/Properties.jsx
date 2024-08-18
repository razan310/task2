import styles from './properties.module.css';
import image1 from './../../assets/images/property-01.jpg';
import image2 from './../../assets/images/property-02.jpg';
import image3 from './../../assets/images/property-03.jpg';
import image4 from './../../assets/images/property-04.jpg';
import image5 from './../../assets/images/property-05.jpg';
import image6 from './../../assets/images/property-06.jpg';

const Properties = () => {
    const properties = [
        { image: image1, type:"Luxury Villa", title: '18 New Street miami,OR 97219', price:'2.264.000', bedrooms:'8', bathrooms:'8', area:'545m2', floor:'3', parking:'6 spots'},
        { image: image2, type:"Luxury Villa", title: '54 Mid Street Florida, OR 27001', price:'1.180.000', bedrooms:'6', bathrooms:'5', area:'450m2', floor:'3', parking:'8 spots'},
        { image: image3,  type:"Luxury Villa",title: '18 Old Street miami,OR 38540', price:'1.460.000', bedrooms:'5', bathrooms:'4', area:'225m2', floor:'3', parking:'10 spots'},
        { image: image4, type:"Apartment", title: '12 New Street miami,OR 12650', price:'584.000', bedrooms:'4', bathrooms:'3', area:'125m2', floor:'25th', parking:'2 cars'},
        { image: image5,  type:"Penthoue",title: '54 Breach Street Florida, OR 27001', price:'925.000', bedrooms:'4', bathrooms:'4', area:'180m2', floor:'38th', parking:'2 cars'},
        { image: image6,  type:"Modern Condo",title: '54 Mid Street Florida, OR 27001', price:'450.000', bedrooms:'3', bathrooms:'2', area:'165m2', floor:'26th', parking:'3 cars'},
    ];

    return (
        <>
        <div>
        <div className={styles.propertiesFirstTitel}>| PROPERTIES</div>
        <div className={styles.propertiesTitel}>We Provide the <br /> Best Property <br /> You Like</div>
        </div>
        <div className={styles.propertiesContainer}>
            {properties.map((property, index) => (
                <div key={index} className={styles.propertyCard}>
                    <img src={property.image}  alt={property.title} className={styles.propertyImage} />
                    <div className={styles.propertyInfo}>
                        <div className={styles.propertyInfoTypePrice}>
                            <button className={styles.propertyInfoButton1}>{property.type}</button>
                            <h3 className={styles.propertyPrice}>${property.price}</h3>
                        </div>
                        <h3 className={styles.propertyTitle}>{property.title}</h3>
                        <div className={styles.propertyDetails}>
                            <h5><span>Bedrooms:</span>{property.bedrooms}</h5>
                            <h5><span>Bathrooms:</span>{property.bathrooms}</h5>
                            <h5><span>Area:</span>{property.area}</h5>
                            <h5><span>Floor:</span>{property.floor}</h5>
                            <h5><span>Parking:</span>{property.parking}</h5>
                        </div>
                        <hr className={styles.hrStyle}/>
                        <button className={styles.propertyInfoButton2}>Schedule a visit</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default Properties;
