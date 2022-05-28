import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import styles from "../Cart/Cart.module.css";
import { useCart } from "react-use-cart";
import "../../App.css";
import { Link } from "react-router-dom";

import {
  BsChatDots,
  BsJournalBookmark,
  BsChevronRight,
  BsHeart,
  BsFillTrashFill,
} from "react-icons/bs";

const Cart = () => {
  // const [count, setCount] = useState(1);
  // const [price, setPrice] = useState(0);
  const [check, setCheck] = useState(true);
  const {
    isEmpty,

    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  // var addNumber = ".000đ";

  console.log(items);
  const total = items.map((e) => {});

  const handleOnChange = (e) => {
    console.log(e.quantity);
    if (check === true) {
      console.log("ok");
      setCheck(false);
    } else {
      setCheck(true);
      console.log("no ok");
    }
  };

  return (
    <div>
      <Header />
      <Container fluid className={`${styles.bg}`}>
        <Container>
          <Row>
            <Col>
              <div className=" my-3 d-flex align-items-center">
                <h5>Giỏ hàng của bạn ({totalItems}) </h5>
                <button className="ms-3 bg-body border-0 px-3 py-1 fw-bold">
                  {" "}
                  Sửa
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <div>
                {isEmpty ? (
                  <h4 className="text-center">
                    {" "}
                    Giỏ hàng trống. Quay lại trang chủ{" "}
                    <Link to="/">tại đây</Link>
                  </h4>
                ) : (
                  ""
                )}
              </div>

              <div>
                {items.map((e, i) => {
                  return (
                    <Row className="bg-body shadow rounded-3 mb-3 pb-3" key={i}>
                      <Col md="7" className="pe-0">
                        {" "}
                        <div>
                          <div>
                            <div className="d-flex justify-content-between pt-2 ">
                              <div className="d-flex">
                                <div>
                                  <img
                                    src="https://media3.scdn.vn/images/ecom/shop_blank-logo-2.jpg"
                                    alt=""
                                    className={`${styles.iconShop} rounded-circle `}
                                  />
                                </div>
                                <span>royalshoplc</span>
                              </div>
                              <div>
                                <button
                                  className={`border-0 ${styles.delete}`}
                                  onClick={() => {
                                    removeItem(e.id);
                                  }}
                                >
                                  Xoá
                                </button>
                              </div>
                            </div>

                            <div className="pb-3 d-flex justify-content-between mx-3 mt-2">
                              <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <input
                                    type="checkbox"
                                    className="me-3"
                                    value={check}
                                    onChange={handleOnChange}
                                  />
                                  <img
                                    src={e.avatar}
                                    alt=""
                                    className={`${styles.iconSP} mt-3 rounded-3`}
                                  />
                                </div>
                                <div className="ms-3 d-flex flex-column align-items-start justify-content-between">
                                  <button className="border-0 rounded-pill fw-bold mt-3 ">
                                    Hết hàng
                                  </button>
                                  <p
                                    className={`card-text ${styles.fzCardText} text-uppercase mt-2 mb-2`}
                                  >
                                    {e.name}
                                  </p>

                                  <button className="border-0 bg-body text-primary">
                                    Tìm sản phẩm tương tự
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="ms-3 pb-2">
                              <button className="border-0 bg-body">
                                {" "}
                                <BsJournalBookmark className="fs-5" />
                                <span className="mx-2">
                                  {" "}
                                  Mã giảm giá của shop
                                </span>
                                <BsChevronRight />
                              </button>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md="5" className="px-0">
                        <div className="d-flex justify-content-end ">
                          <button className="border-0 bg-body">
                            <span className="text-nowrap">
                              <BsChatDots /> Chat với shop
                            </span>
                          </button>
                        </div>

                        <div className="d-flex justify-content-between ">
                          <div className="mt-5 ms-2">
                            <h6 className="text-danger">{e.price}.000đ</h6>
                          </div>

                          <div className="d-flex flex-column align-items-center">
                            <div>
                              <button
                                className="border-0 ms-3 px-2 py-1 "
                                onClick={() => {
                                  updateItemQuantity(e.id, e.quantity - 1);
                                }}
                              >
                                -
                              </button>
                              <input
                                type="numeric"
                                value={e.quantity}
                                className={`${styles.count} ms-3 text-center`}
                              />
                              {/* <span></span> */}
                              <button
                                className="border-0 ms-3 px-2 py-1 mt-5"
                                onClick={() => {
                                  updateItemQuantity(e.id, e.quantity + 1);
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end align-items-center mt-5 ">
                            <button
                              className={`${styles.iconHeart} border-0 bg-body d-none d-md-block`}
                            >
                              <BsHeart />
                            </button>
                            <button
                              className={`${styles.iconHeart} border-0 bg-body d-none d-md-block`}
                              onClick={() => {
                                removeItem(e.id);
                              }}
                            >
                              <BsFillTrashFill />
                            </button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </div>
            </Col>
            <Col md="4" className="">
              <div className="shadow bg-body">
                <div className="d-flex justify-content-between px-2">
                  <div>
                    <button className="border-0 bg-body">
                      {" "}
                      <BsJournalBookmark className="fs-5" />
                      <span className="mx-2"> Mã ưu đãi của Sendo(25)</span>
                    </button>
                  </div>
                  <div className="text-primary">
                    <span>Chọn/nhập mã</span>
                  </div>
                </div>
                <hr />

                <div className="d-flex justify-content-between px-2">
                  <div>
                    <span>Tạm Tính:</span>
                  </div>
                  <div>
                    <h5>{cartTotal.toLocaleString()}.000đ</h5>
                  </div>
                </div>

                <div className="px-2 mt-2 pb-3">
                  <button className="border-0 text-center text-light w-100 bg-danger fw-bold py-2 rounded-3">
                    Mua Ngay
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
