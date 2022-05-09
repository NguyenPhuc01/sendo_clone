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
            <Col lg="2" className="px-0">
              <div className="d-flex justify-content-around">
                <div>
                  <img src="./sendo.jpg" alt="" className="" />
                </div>
                <div className="fw-bold fs-4">
                  <BsGrid />
                </div>
              </div>
            </Col>
            <Col lg="8" className="ps-0">
              <div>
                <form>
                  <div class="d-flex">
                    <input
                      type="search"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Tìm kiếm trên Sendo..."
                    />
                    <button type="submit" class="btn bg-body ms-2">
                      <BsSearch className="fs-5 fw-bold" />
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col lg="2">
              <div className="d-flex justify-content-around">
                <div>
                  <BsHandbag className="fs-4" />
                </div>
                <div>
                  <Link to="login">
                    <button className="border-0 bg-body fw-bold rounded-3 py-1 px-2">
                      Đăng nhập
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
