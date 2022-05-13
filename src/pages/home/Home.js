import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../home/Home.module.css";
import Header from "../../components/Layout/DefaultLayout/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <div>
              <ul className="list-unstyled py-4 d-flex justify-content-between ">
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/12_02/9kXbb4RjnHs0H0JKJokE.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Rau củ quả <br /> Sendo Farm
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2022/03_20/lsNbH2ymk3eWcg9va8Oj.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    SenMart
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2022/03_21/20xdQdsVizWr7sySInNf.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    SenMall <br />
                    Freeship 0Đ
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2022/02_17/skk6j4C7Q0mSvn5ooIvs.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Săn Sale Shop+
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/12_29/JVWUN7eviT3n8jnc57rH.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Shop gần bạn
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2022/05_10/PH4kngcuj10dFCHtd8Rf.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Bay giá rẻ <br />
                    -100K
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/12_17/MyUBTmvIbu1H7P7K15Zp.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Dịch vụ <br />
                    thẻ game
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/04_30/Dnwui395gD7DCTSPcbsx.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Nạp thẻ & <br />
                    dịch vụ
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/06_24/BIq1S6MQOJIGETUv1cgv.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Siêu thị <br />
                    điện tử
                  </span>
                </li>
                <li className="d-flex flex-column align-items-center justify-content-start">
                  <img
                    src="https://media3.scdn.vn/img4/2021/01_12/Crz8i79uPgWYZJXgJF79.png"
                    alt=""
                    className={`${styles.sp}`}
                  />
                  <span className={`text-center mt-2 ${styles.fz}`}>
                    Voucher & <br />
                    Mã Freeship
                  </span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="px-0">
            <div>
              <img
                src="https://media3.scdn.vn/img4/2022/05_11/66fCtpSaD7CMb8xvovov.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
