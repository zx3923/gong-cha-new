import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="page-top">
          <div>
            <h2>HOW TO ORDER</h2>
            <div>취향에 맞게 토핑, 당도, 얼음량까지 맞춤 주문이 가능합니다</div>
          </div>
        </div>
        <div className="page-body">
          <div className="head-text">공차가 처음이신가요?</div>
          <p className="body-text">공차는 오리지널 티(Tea)와 밀크티, 스무디, 과일믹스 등의 메뉴를 베이스로<br />
            5가지 당도와 얼음량, 토핑까지 선택할 수 있어 취향에 따라 커스터마이징하여 주문 가능합니다.<br />
            <span className="body-text-red">약 600여 가지의 다양한 조합으로 음료를 즐길 수 있습니다.</span>
          </p>
          <img className="order_method_head_visual" src="img/order_method_head_visual.png" alt="" />
        </div>
        <div className="step">
          <div className="step-1">
            <div className="step-1-text">
              <p>STEP 01</p>
              <p>TEA MENU</p>
              <p>취향에 맞게 공차의 음료를 고르세요.</p>
            </div>
            <div className="step-1-img">
              <div>
                <img src="img/order_method_img1_1.png" alt="" />
                <p>오리지널 티</p>
                <p>(Hot & Iced)</p>
              </div>
              <div>
                <img src="img/order_method_img1_3.png" alt="" />
                <p>밀크티</p>
                <p>(Hot & Iced)</p>
              </div>
              <div>
                <img src="img/order_method_img1_4.png" alt="" />
                <p>과일믹스</p>
                <p>(Hot & Iced)</p>
              </div>
              <div>
                <img src="img/order_method_img1_6.png" alt="" />
                <p>쥬얼리</p>
                <p>(Iced only)</p>
              </div>
            </div>
          </div>
          <div className="step-2">
            <div className="step-2-body">
              <div className="step-2-text">
                <p>STEP 02</p>
                <p>TOPPINGS</p>
                <p>6가지 토핑 중<br />
                  원하는 토핑을 선택하세요.<br />
                  (최대 3가지 선택 가능)</p>
              </div>
              <div className="step-2-img">
                <div>
                  <p className="step-1-tt">밀크폼</p>
                  <p className="step-2-tt">Milk Foam</p>
                  <img src="img/order_method_img2_1.gif" alt="" />
                  <p className="step-3-tt">깊고 부드러운 맛을 내는<br />
                    달콤 짭쪼름한 토핑</p>
                </div>
                <div>
                  <p className="step-1-tt">펄(타피오카)</p>
                  <p className="step-2-tt">Pearl</p>
                  <img src="img/order_method_img2_2.gif" alt="" />
                  <p className="step-3-tt">카사바 뿌리의 녹말로 만든<br />
                    쫀득쫀득한 식감의 토핑</p>
                </div>
                <div>
                  <p className="step-1-tt">코코넛</p>
                  <p className="step-2-tt">Coconut
                  </p>
                  <img src="img/order_method_img2_4.gif" alt="" />
                  <p className="step-3-tt">달콤한 코코넛으로 만들어진<br />
                    쫄깃쫄깃한 젤리</p>
                </div>
                <div>
                  <p className="step-1-tt">알로에</p>
                  <p className="step-2-tt">Aloe</p>
                  <img src="img/order_method_img2_3.gif" alt="" />
                  <p className="step-3-tt">신선하고<br />
                    사각사각한 토핑</p>
                </div>
                <div>
                  <p className="step-1-tt">화이트펄</p>
                  <p className="step-2-tt">White Pearl</p>
                  <img src="img/order_method_img2_5.gif" alt="" />
                  <p className="step-3-tt">해초추출물로 만들어<br />
                    꼬들꼬들한 토핑</p>
                </div>
                <div>
                  <p className="step-1-tt">치즈폼</p>
                  <p className="step-2-tt">Cheese Foam</p>
                  <img src="img/order_method_img2_6.gif" alt="" />
                  <p className="step-3-tt">진한 치즈 풍미를 더해<br />
                    감칠맛이 나는 달콤 짭조름한 토핑</p>
                </div>
              </div>
            </div>
          </div>
          <div className="step-3">
            <div className="step-3-text">
              <p>STEP 03</p>
              <p>SWEET &
                ICE GRADE</p>
              <p>당도와 얼음량을 원하시는 만큼 조절하세요.</p>
            </div>
            <div className="step-3-img">
              <p>당도 선택
              </p>
              <div><img src="img/order_method_img3_1.jpg" alt="" /></div>
              <p>당도 선택
              </p>
              <div><img src="img/order_method_img3_2.jpg" alt="" /></div>
            </div>
          </div>
        </div>






      </div>
    </>
  );
}

export default App;
