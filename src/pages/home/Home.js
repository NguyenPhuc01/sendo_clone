import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../Home/Home.module.css";
import Header from "../../components/Layout/DefaultLayout/Header";
import { Link } from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import Banner from "../../components/Banner/Banner.js";
import "../../App.css";
import Footer from "../../components/Footer/Footer";
const axios = require("axios").default;

const pages = [1, 2, 3];
const Home = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const handleScrol = (e) => {
      const onTop = document.getElementById("onTheTop");
      if (window.scrollY > 100) {
        onTop.classList.remove("d-none");
      } else {
        onTop.classList.add("d-none");
      }
    };
    window.addEventListener("scroll", handleScrol);
  }, []);
  const handleNextPage = (i) => {
    setPage(i + 1);

    const animation = setInterval(() => {
      document.body.scrollTop = 100;
      document.documentElement.scrollTop = 100;
      console.log("log");
      clearInterval(animation, 200);
    }, 200);
  };

  const onTop = (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    axios
      .get(`http://khanh.tokyo/api/products?page=${page}&limit=18&id=2`)
      .then(function (response) {
        setProduct(response.data.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [page]);

  // console.log(product);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <div className="d-none d-md-block">
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
              <Banner />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className={`${styles.bgSP}`}>
        <Container>
          <Row>
            <Col lg="12" className="">
              <div className={`${styles.cardProduct}`}>
                {product.map((product, i) => {
                  return (
                    <Link
                      to={`product/${product.id}/${product.slug}`}
                      key={product.keyid}
                      className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-3 rounded  mx-2`}
                    >
                      <img
                        src={product.avatar}
                        className={`${styles.cardImg}`}
                        alt="..."
                      />
                      <div className={`card-body p-2`}>
                        <p
                          className={`card-text ${styles.fzCardText} mt-1 mb-2`}
                        >
                          {product.name}
                        </p>
                        <h6 className="card-title">{product.price}</h6>
                      </div>
                      <div className="d-flex justify-content-between p-1">
                        <span>TP.HCM</span>
                        <span>đã bán 2</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`d-flex justify-content-center mt-5 mb-3`}>
                {pages.map((e, i) => {
                  return (
                    <button
                      className="border-0 shadow  mb-3 ms-3 pb-2 px-2 bg-body rounded mx-3"
                      key={i}
                      onClick={() => {
                        handleNextPage(i);
                      }}
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col>
            <div className={`fixed-bottom mb-5 ${styles.widthOntop}`}>
              <button
                onClick={onTop}
                className="border-0 fs-3 shadow  mb-3 ms-3 pb-2 px-2 bg-body rounded text-danger d-none"
                id="onTheTop"
              >
                {" "}
                <BsArrowUpSquare />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
