import React from "react";
import styles from "./Head.module.css";
import img1 from "./img/location_brand_home.png";
import img2 from "./img/location_brand_arr.png";
import img3 from "./img/location_brand_arr.png";

const Head = () => {
  return (
    <>
      <div className={styles.pageTop}>
        <div className={styles.page}>
          <h2 className={styles.pageHeadtext}>HOW TO ORDER</h2>
          <p className={styles.pageBodytext}>
            취향에 맞게 토핑, 당도, 얼음량까지 맞춤 주문이 가능합니다
          </p>
          <div className={styles.redbox}>
            <a href="/" className={styles.home}>
              <img src={img1} alt="" className={styles.arrow} />
            </a>
            <img src={img2} alt="" className={styles.arrow} />
            <a href="#" className={styles.menu}>
              <span>메뉴</span>
            </a>
            <img src={img3} alt="" />
            <span className={styles.orderMenu}>주문방법</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
