import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/DefaultLayout/Header";
import InforLayout from "../../components/Layout/layOutInfor/InforLayout";
import { orderProduct, selectOrder } from "../../features/order/OrderSlice";
import styles from "../purchaseOrder/Order.module.css";
const Order = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(selectOrder);

  const productOrder = data?.user?.data;
  console.log("🚀 ~ file: Order.js ~ line 15 ~ Order ~ data", productOrder);
  const navigate = useNavigate();
  //   console.log("🚀 ~ file: Product.js ~ line 51 ~ Product ~ data", data);
  //   const getInforOrder = useCallback(async () => {
  //     // console.log("POL");
  //     try {
  //       await dispatch(orderProduct());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, [dispatch]);

  // useEffect(() => {
  //   if (data.length > 0) {
  //   }
  // }, [data]);
  const renderOrder = () => {
    if (productOrder?.length > 0) {
      return productOrder.map((product, index) => {
        const data = {
          id: product.id,
          name: product.full_name,
          address: product.address,
        };
        return (
          <div className="shadow" key={index}>
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
              <div className="d-flex flex-column align-items-center h-100">
                <div>
                  {" "}
                  <button
                    className={`border-0 ${styles.delete}`}
                    //   onClick={() => {
                    //     removeItem(e.id);
                    //   }}
                  >
                    Xoá
                  </button>
                </div>
                <div>
                  <button className="border-0 bg-body text-primary">
                    Tìm sản phẩm tương tự
                  </button>
                </div>
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
                    {product.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="d-flex justify-content-center mt-md-3">
          <h6>
            Bạn chưa có đơn hàng trong 6 tháng gần đây, nhấn vào
            <button
              className="bg-body text-primary border-0 "
              onClick={() => {
                navigate("/");
              }}
            >
              đây
            </button>
            để mua hàng
          </h6>
        </div>
      );
    }
  };
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
              <Col>{renderOrder()}</Col>{" "}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Order;
