import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Layout/DefaultLayout/Header";
import InforLayout from "../../components/Layout/layOutInfor/InforLayout";
import { orderProduct, selectOrder } from "../../features/order/OrderSlice";
import styles from "../purchaseOrder/Order.module.css";
import { BsJournalBookmark, BsChevronRight } from "react-icons/bs";
const Order = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectOrder);
  console.log("🚀 ~ file: Order.js ~ line 11 ~ Order ~ data", data);
  //   console.log("🚀 ~ file: Product.js ~ line 51 ~ Product ~ data", data);
  //   const getInforOrder = useCallback(async () => {
  //     // console.log("POL");
  //     try {
  //       await dispatch(orderProduct());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [dispatch]);
  useEffect(() => {
    dispatch(orderProduct());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md="4" lg="3">
            <InforLayout />
          </Col>
          <Col md="8" lg="9">
            <div>
              <h5 className="mt-4 mt-md-0">Quản lý đơn hàng</h5>
              <div>
                <ul
                  className={`nav overflow-auto d-flex text-nowrap ${styles.nav}`}
                >
                  <li className="nav-item">
                    <a
                      className={`nav-link text-black active ${styles.active} `}
                      aria-current="page"
                      href="##"
                    >
                      Chờ xác nhận
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="##">
                      Đã xác nhận
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="##">
                      Đang vận chuyển
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="##">
                      Đã giao hàng
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-black" href="##">
                      Đã hủy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Row>
              <Col>
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
                          //   onClick={() => {
                          //     removeItem(e.id);
                          //   }}
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
                            // value={check}
                            // onChange={handleOnChange}
                          />
                          <img
                            // src={e.avatar}
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
                            {/* {e.name} */}
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
                        <span className="mx-2"> Mã giảm giá của shop</span>
                        <BsChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
