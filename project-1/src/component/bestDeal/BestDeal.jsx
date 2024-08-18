
import styles from './BestDeal.module.css';
import propertyImage from './../../assets/images/deal-01.jpg';

const BestDeal = () => {
  return (
    <div className={styles.container}>
        <p className={styles.deal}>| BEST DEAL</p>
        <div className={styles.header}>
            <h1 className={styles.title}>Find Your Best<br/> Deal Right Now!</h1>
            <div className={styles.buttons}>
                <button className={`${styles.button} ${styles.appartment}`}>Appartment</button>
                <button className={`${styles.button} ${styles.villa}`}>Villa House</button>
                <button className={`${styles.button} ${styles.penthouse}`}>Penthouse</button>
            </div>
      </div>
      <div className={styles.content}>
        <div className={styles.details}>
          <p><span>Total Flat Space</span> 185 m2</p>
          <hr className={styles.linestyle}/>
          <p><span>Floor number</span> 26th</p>
          <hr className={styles.linestyle}/>
          <p><span>Number of rooms</span> 4</p>
          <hr className={styles.linestyle}/>
          <p><span>Parking Available</span> Yes</p>
          <hr className={styles.linestyle}/>
          <p><span>Payment Process</span> Bank</p>
        </div>
        <div className={styles.image}>
          <img src={propertyImage} alt="Property" />
        </div>
        <div className={styles.info}>
          <p><span>Extra Info About property</span><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.<br/>
            <br/> when you need free CSST template you can simply type templateMO in any search engine website. in addition, you can type templets portifile,
             templete one page layoutis,ect. </p>
          <button className={styles.visitButton}>Schedule a visit</button>
        </div>
      </div>
    </div>
  );
};

export default BestDeal;
