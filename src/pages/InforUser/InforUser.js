import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import styles from "../InforUser/InforUser.module.css";
import {
  BsJournalText,
  BsGeoAlt,
  BsShieldLock,
  BsHeart,
  BsArrowClockwise,
} from "react-icons/bs";
const InforUser = () => {
  const infor = localStorage.getItem("infor");
  const nameInfor = JSON.parse(infor);
  console.log(nameInfor);
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-4">
          <Col md="3">
            <div className="d-flex">
              <div>
                <img
                  src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png"
                  alt=""
                  className={`${styles.iconUser} rounded-circle`}
                />
              </div>
              <div className="ms-3">
                <h6 className="mb-0">{nameInfor.name}</h6>
                <button
                  className={`${styles.fs} border-0 bg-body ps-0 text-black-50`}
                >
                  Chỉnh sửa tài khoản
                </button>
              </div>
            </div>

            <h6 className={`${styles.manage} mt-3 py-1 ps-2 fw-bold`}>
              Quản lý giao dịch
            </h6>

            <div>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <BsJournalText />
                  Đơn hàng
                </li>
                <li className="mt-2">
                  <BsArrowClockwise />
                  Đơn hàng dịch vụ tiện ích
                </li>
                <li className="mt-2">
                  <BsShieldLock />
                  Tài khoản Senpay
                </li>
                <li className="mt-2">
                  <BsGeoAlt />
                  Địa chỉ nhận hàngn
                </li>
                <li className="my-2">
                  <BsHeart />
                  Sản phẩm yêu thích
                </li>
              </ul>
            </div>
            <h6 className={`${styles.manage} mt-3 py-1 ps-2 fw-bold `}>
              Quản lý giao dịch
            </h6>

            <div>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <BsJournalText />
                  Đơn hàng
                </li>
                <li className="mt-2">Đơn hàng dịch vụ tiện ích</li>
                <li className="mt-2">Tài khoản Senpay</li>
                <li className="mt-2">Địa chỉ nhận hàngn</li>
                <li className="mt-2">Sản phẩm yêu thích</li>
              </ul>
            </div>
          </Col>
          <Col md="9">2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default InforUser;
