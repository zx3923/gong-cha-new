import React from "react";
import styles from "./Body.module.css";
import img from "./img/order_method_head_visual.png";
const Body = () => {
  return (
    <>
      <div className={styles.pageBody}>
        <div className={styles.headText}>공차가 처음이신가요?</div>
        <p className={styles.bodyText}>
          공차는 오리지널 티(Tea)와 밀크티, 스무디, 과일믹스 등의 메뉴를
          베이스로
          <br />
          5가지 당도와 얼음량, 토핑까지 선택할 수 있어 취향에 따라
          커스터마이징하여 주문 가능합니다.
          <br />
          <span className={styles.textRed}>
            약 600여 가지의 다양한 조합으로 음료를 즐길 수 있습니다.
          </span>
        </p>
        <img className={styles.order_method_head_visual} src={img} alt="" />
      </div>
    </>
  );
};

export default Body;
