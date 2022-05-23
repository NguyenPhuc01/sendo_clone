import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../DefaultLayout/Header.module.css";
import { BsGrid, BsSearch, BsHandbag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BsBoxArrowRight, BsPersonCircle } from "react-icons/bs";


const Header = () => {
  const navigate = useNavigate();
  const infor = localStorage.getItem("infor");
  const nameInfor = JSON.parse(infor);

  const handLogOut = () => {
    localStorage.removeItem("infor");

    window.location.reload();
    console.log("click");
  };
  const hanDangNhap = () => {
    if (nameInfor) {
      navigate("/");

      console.log("log");
    } else {
      window.location.reload(navigate("/login"));
    }
  };

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
                <button
                  className={`${styles.bg} border-0`}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img src="../../sendo.jpg" alt="" className="" />
                </button>
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
                      className="form-control w-100 shadow-none"
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
                <div className="d-none d-xl-block ">
                  <BsHandbag className="fs-4" />
                </div>
                <div className=" ">
                  <div className="d-none d-md-block ">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="border-0 bg-body ] rounded-3 py-1 px-2 text-nowrap ms-2"
                      onClick={hanDangNhap}
                    >
                      {" "}
                      {nameInfor ? (
                        <BsPersonCircle className="text-black-50 me-1 fs-5" />
                      ) : (
                        ""
                      )}
                      {nameInfor ? nameInfor.name : "Đăng Nhập"}
                    </button>
                  </div>
                </div>

                <div
                  className={`${styles.modall} modal`}
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body text-black">
                        <div>
                          <button
                            className={`bg-body border-0 ${styles.hoverButton} mb-2`}
                          >
                            Thông tin tài khoản
                          </button>
                        </div>
                        <div>
                          <button className={`bg-body border-0  mb-2`}>
                            Ưu đãi của tôi
                          </button>
                        </div>
                        <div>
                          <button className={`bg-body border-0  mb-2`}>
                            Sản phẩm yêu thíc
                          </button>
                        </div>
                        <div>
                          <button className={`bg-body border-0  mb-2`}>
                            Theo dõi đơn hàng
                          </button>
                        </div>
                        <div>
                          <button className={`bg-body border-0 `}>
                            Đơn hàng dịch vụ tiện ích
                          </button>
                        </div>
                      </div>
                      <div className={`modal-footer ${styles.logOut}`}>
                        {/* <div className="d-flex align-items-center" id="logOut"> */}

                        <button
                          className="border-0 bg-body rounded-3 py-1 px-2 text-nowrap ms-2"
                          onClick={handLogOut}
                        >
                          <BsBoxArrowRight className="fs-5 fw-bold me-2" /> Đăng
                          Xuất
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
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
