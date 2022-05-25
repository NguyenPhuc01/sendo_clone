import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import styles from "../Detail/DetailProduct.module.css";
import { BsHandbag } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
import { useCart } from "react-use-cart";
const axios = require("axios").default;

const DetailProduct = () => {
  const { addItem } = useCart();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://khanh.tokyo/api/products/${id}`)
      .then(function (response) {
        setProduct(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const addItemDetai = () => {
    const data = {
      id: product.id,
      name: product.name,
      price: product.price,
      avatar: product.avatar,
      detail: product.detail,
      cate_id: product.cate_id,
    };
    addItem(data, parseInt(1));
  };

  console.log(product);
  return (
    <div>
      <Header />
      <Container className="bg-body  shadow my-3">
        <Row>
          <Col lg="5">
            <div>
              <img
                src={product.avatar}
                alt=""
                className="h-100 w-100 img-fluid"
              />
            </div>
          </Col>

          <Col lg="7">
            <div>
              <div className={`mt-3 d-flex `}>
                <img
                  src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                  alt=""
                  className={`${styles.iconShop} mt-1 me-2 d-none d-sm-block rounded-3`}
                />
                <h5>{product.name}</h5>
              </div>
              <div className="mt-2">
                <span>Thương hiệu: </span>
                <span className="text-primary ">{product.brandname}</span>
                <h3 className="text-danger mt-2 mb-5">{product.price}</h3>
                <div className="d-flex align-items-center">
                  <BsHandbag />
                  <span className="text-secondary ms-2">2 lượt mua </span>
                </div>
              </div>
              <hr />

              <div className="d-flex">
                <div>
                  <span>Chọn số lượng</span>
                </div>
                <div>
                  <button
                    className="border-0 ms-3 px-3 py-1"
                    onClick={() => {
                      if (count > 0) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="numeric"
                    value={count}
                    className={`${styles.count} ms-3 text-center`}
                  />
                  <button
                    className="border-0 ms-3 px-3 py-1"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button
                className="border-0 bg-sendery px-md-5 py-1 rounded-3 fw-bold text-center "
                onClick={() => addItemDetai()}
              >
                Thêm vào giỏ
              </button>
              <button className="border-0 bg-danger rounded-3 text-light fw-bold px-3 px-md-5 py-2 text-center me-2  ">
                Mua ngay
              </button>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <div>
                <b>Ưu đãi dành cho bạn</b>
              </div>
              <div>
                <BsExclamationCircle className="fs-4 me-2" />
              </div>
            </div>
            <Row className="mt-3">
              <Col md="6">
                <div>
                  <div>
                    <img
                      src="https://media3.scdn.vn/img4/2020/02_22/09A417Le8f9vmJ0aWEu6.png"
                      alt=""
                      className={`${styles.iconForYou} me-2 `}
                    />
                    <span>Miễn phí vận chuyển</span>
                  </div>
                  <div className="mt-3">
                    <img
                      src="https://media3.scdn.vn/img4/2022/04_14/P8X20So6YTrWe466Xr7v.png"
                      alt=""
                      className={`${styles.iconForYou} me-2  `}
                    />
                    <span>Hỏa tốc</span>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className={`${styles.iconSale}`}>
                  <img
                    src="https://media3.scdn.vn/img4/2021/05_10/HHDHM10eqVNmGUZE5EfA.png"
                    alt=""
                    className={`${styles.iconForYou} me-2 `}
                  />
                  <span>Giảm khi mua qua App</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="5"></Col>
          <Col lg="7">
            <div className={`${styles.moTa} mb-5`}>
              <h3 className="mt-5 mb-3">Mô tả sản phẩm</h3>
              <span className="mt-2">{product.detail}</span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className={`${styles.bgDetail}`}>
        <Footer />
      </Container>
    </div>
  );
};

export default DetailProduct;
