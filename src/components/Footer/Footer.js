import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../Footer/Footer.module.css";
const Footer = () => {
  const [tutorial, setTutorial] = useState([
    {
      id: 1,
      img: "https://media3.scdn.vn/img4/2020/12_16/gJwXr6FFZKZCGKWaz4RB.png",
      tiltle: "Siêu nhiều hàng tốt",
      description: "Cần gì cũng có 26 ngành hàng & 10 triệu sản phẩm",
    },
    {
      id: 2,
      img: "https://media3.scdn.vn/img4/2020/12_16/EfZWQVfV6nQzu2vMmnwC.png",
      tiltle: "Siêu yên tâm",
      description: "Miễn phí đổi trả 48h",
    },
    {
      id: 3,
      img: "https://media3.scdn.vn/img4/2020/12_16/j5C6IQz7gIXPgjFJxmRz.png",
      tiltle: "Siêu tiện lợi",
      description: "Mang thế giới mua sắm của Sendo trong tầm tay bạn",
    },
    {
      id: 4,
      img: "https://media3.scdn.vn/img4/2020/12_16/7AJFQGQ5qvS7gGOz8P7a.png",
      tiltle: "Siêu tiết kiệm",
      description:
        "Giá hợp lý, vừa túi tiền. Luôn có nhiều chương trình khuyến mãi",
    },
  ]);

  console.log(tutorial);
  return (
    <div>
      <Container fluid>
        <Container>
          <Row>
            <Col className="px-0">
              <div className={`${styles.super}`}>
                {tutorial.map((e) => {
                  return (
                    <div className={`${styles.szBox}`} key={e}>
                      <div className="d-flex justify-content-center">
                        <img src={e.img} alt="" className={`${styles.szImg}`} />
                      </div>
                      <div className="d-flex flex-column align-items-center text-center">
                        <span className={`${styles.fz} mt-2`}>{e.tiltle}</span>
                        <span
                          className={`${styles.description} ${styles.widthDescription} mt-2`}
                        >
                          {e.description}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className={` ${styles.bgFooter} pt-3`}>
        <Container>
          <Row>
            <Col className="px-0">
              <div className="d-flex justify-content-between">
                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    Về chúng tôi
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Giới thiệu Sendo.vn
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Giới Thiệu SenMail
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Quy chế hoạt động
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    DÀNH CHO NGƯỜI MUA
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Giải quyết khiếu nại
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Hướng dẫn mua hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chính sách đổi trả
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chăm sóc khách hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Nạp tiền điện thoại
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    DÀNH CHO NGƯỜI BÁN
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Quy định đối với người bán
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Chính sách bán hàng
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Hệ thống tiêu chí kiểm duyệt
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Mở shop trên Sendo
                  </li>
                </ul>

                <ul className={`${styles.szAbout} list-unstyled`}>
                  <li className={`${styles.fz} text-uppercase mt-1`}>
                    TẢI ỨNG DỤNG SENDO
                  </li>
                  <li className={`${styles.description} mt-1`}>
                    Mang thế giới mua sắm của Sendo trong tầm tay bạn
                  </li>

                  <div className={`${styles.store}`}>
                    <div className="d-md-flex mt-3">
                      <div>
                        <img
                          src="https://media3.scdn.vn/img4/2020/12_16/5lUTWdk3DXr8nlC9MDII.png"
                          alt=""
                          className={`${styles.szStore} me-2`}
                        />
                      </div>
                      <div>
                        <img
                          src="https://media3.scdn.vn/img4/2021/10_26/0ZARLASzVrfL92924rzW.png"
                          alt=""
                          className={`${styles.szStore} `}
                        />
                      </div>
                    </div>

                    <div className="mt-2">
                      <img
                        src="https://media3.scdn.vn/img4/2021/03_19/AMV086JNpEbm4OGAvVng.png"
                        alt=""
                        className={`${styles.szStore}`}
                      />
                    </div>
                  </div>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-black text-light">
        <Container>
          <Row>
            <Col className="ps-0 col-5">
              <div className="d-flex justify-content-between">
                <div className={`d-flex flex-column ${styles.widthCompany} `}>
                  <span className={`${styles.fz}  mt-1`}>
                    Công ty Cổ phần Công nghệ Sen Đỏ, thành viên của Tập đoàn
                    FPT
                  </span>
                  <span className={`${styles.description} mt-1 text-light`}>
                    Số ĐKKD: 0312776486 - Ngày cấp: 13/05/2014, được sửa đổi lần
                    thứ 6, ngày 23/05/2016.
                  </span>
                  <span className={`${styles.description} mt-1 text-light`}>
                    Cơ quan cấp: Sở Kế hoạch và Đầu tư TPHCM.
                  </span>
                  <span className={`${styles.description} mt-1 text-light`}>
                    Địa chỉ: Tầng 5, Tòa nhà A, Vườn Ươm Doanh Nghiệp, Lô D.01,
                    Đường Tân Thuận, Khu chế xuất Tân Thuận, Phường Tân Thuận
                    Đông, Quận 7, Thành phố Hồ Chí Minh, Việt Nam.
                  </span>
                  <span className={`${styles.description} mt-1 text-light`}>
                    Email: lienhe@sendo.vn
                  </span>
                  <div className="d-md-flex ">
                    <div>
                      <img
                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                        alt=""
                        className={`${styles.szStore} me-3 `}
                      />
                    </div>
                    <div>
                      <img
                        src="https://media3.scdn.vn/img4/2020/12_16/XhpGDnvWqrlKeHLst3aS.png"
                        alt=""
                        className={`${styles.szStore}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-7 pe-0">
              <div className={`${styles.widthRegistration}`}>
                <span className={`${styles.fz}  mt-1`}>
                  Đăng ký nhận bản tin ưu đãi khủng từ Sendo
                </span>
                <div className={`${styles.email} mt-2 `}>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email của bạn là "
                      className="me-1 py-1 rounded-3 border-0 ps-2 "
                    />
                  </div>
                  <div className="">
                    <button className="bg-danger text-light py-1 px-md-3 fw-bold text-nowrap  rounded-3 ">
                      {" "}
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
