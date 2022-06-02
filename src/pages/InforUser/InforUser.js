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
  BsPencilSquare,
  BsShopWindow,
  BsCashStack,
  BsChatSquareDots,
  BsDiagram2,
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
          <Col md="4" lg='3'>
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

            <h6 className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold`}>
              Quản lý giao dịch
            </h6>

            <div>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <BsJournalText className="me-2" />
                  Đơn hàng
                </li>
                <li className="mt-2">
                  <BsArrowClockwise className="me-2" />
                  Đơn hàng dịch vụ tiện ích
                </li>
                <li className="mt-2">
                  <BsShieldLock className="me-2" />
                  Tài khoản Senpay
                </li>
                <li className="mt-2">
                  <BsGeoAlt className="me-2" />
                  Địa chỉ nhận hàngn
                </li>
                <li className="my-2">
                  <BsHeart className="me-2" />
                  Sản phẩm yêu thích
                </li>
              </ul>
            </div>
            <h6 className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold `}>
              Quản lý tài khoản
            </h6>

            <div>
              <ul className="list-unstyled">
                <li className="mt-2">
                  <BsPencilSquare className="me-2" />
                  Thông tin tài khoản
                </li>
                <li className="mt-2">
                  {" "}
                  <BsShopWindow className="me-2" />
                  Shop yêu thích
                </li>
                <li className="mt-2">
                  <BsCashStack className="me-2" /> Ưu đãi của tôi
                </li>
                <li className="mt-2">
                  <BsChatSquareDots className="me-2" />
                  Hỏi đáp
                </li>
                <li className="mt-2">
                  <BsDiagram2 className="me-2" />
                  Liên kết mạng xã hội
                </li>
              </ul>
            </div>
          </Col>
          <Col md="8" lg='9'>
            <div>
              <h6>Thông tin tài khoản</h6>
            </div>
            <div className="shadow bg-body">1</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InforUser;
