import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../DefaultLayout/Header.module.css";
import { BsGrid, BsSearch, BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <Container fluid className={`${styles.bgHelp} text-white`}>
        <Container>
          <Row className={`${styles.help}  d-flex  align-items-center`}>
            <Col lg="5" xl="4" md="6">
              <div>
                <ul
                  className={`d-flex list-unstyled justify-content-between align-items-center mb-0 ${styles.fz} text-nowrap`}
                >
                  <li className="">Tải ứng dụng</li>
                  <li>Chăm sóc khách hàng</li>
                  <li>Kiểm tra đơn hàng</li>
                </ul>
              </div>
            </Col>
            <Col lg="4" xl="3"></Col>
            <Col lg="3" xl="5"></Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`${styles.bg} text-white`}>
        <Container>
          <Row className={`${styles.sizeLogo} d-flex align-items-center`}>
            <Col lg="2" md="3" sm="3" xs="4" className="px-0">
              <div className="d-flex justify-content-around">
                <div>
                  <img src="./sendo.jpg" alt="" className="" />
                </div>
                <div className="fw-bold fs-4 d-none d-lg-block">
                  <BsGrid />
                </div>
              </div>
            </Col>
            <Col lg="8" md="6" sm="6" xs="7" className="ps-0">
              <div>
                <form>
                  <div className="d-flex">
                    <input
                      type="search"
                      className="form-control w-100"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Tìm kiếm trên Sendo..."
                    />
                    <button type="submit" className="btn bg-body ms-2">
                      <BsSearch className="fs-5 fw-bold" />
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg="2" md="3 " sm="3" xs="1">
              <div className="d-flex justify-content-around ">
                <div className="d-none d-lg-block">
                  <BsHandbag className="fs-4" />
                </div>
                <div className="d-none d-lg-block">
                  <Link to="login ">
                    <button className="border-0 bg-body fw-bold rounded-3 py-1 px-2 text-nowrap">
                      Đăng nhập
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={`${styles.bg}  text-white`}>
        <Container>
          <Row className="">
            <Col className="">
              <div className="d-none d-lg-block">
                <ul
                  className={`d-flex list-unstyled justify-content-around align-items-center ${styles.sizeAbout} mb-0 `}
                >
                  <li>Cho bạn</li>
                  <li>Đầm, váy</li>
                  <li>Đồ dùng nhà bếp</li>
                  <li>Áo nữ</li>
                  <li>Dụng cụ làm vườn</li>
                  <li>Áo khoác nữ</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
