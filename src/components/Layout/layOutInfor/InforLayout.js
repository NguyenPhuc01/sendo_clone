import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
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
  BsList,
} from "react-icons/bs";
import styles from "../../../pages/InforUser/InforUser.module.css";

import { useSelector } from "react-redux";
import { selectCheckOut } from "../../../features/checkOut/CheckOutSlice";
import { useNavigate } from "react-router-dom";
const InforLayout = () => {
  const infor = localStorage.getItem("userData");
  const nameInfor = JSON.parse(infor);
  const { user } = useSelector(selectCheckOut);
  const navigate = useNavigate();

  return (
    <div className="border-end">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div>
            <img
              src="https://thuvienplus.com/themes/cynoebook/public/images/default-user-image.png"
              alt=""
              className={`${styles.iconUser} rounded-circle`}
            />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">{nameInfor?.name || user?.name}</h6>
            <button
              className={`${styles.fs} border-0 bg-body ps-0 text-black-50`}
            >
              Chỉnh sửa tài khoản
            </button>
          </div>
        </div>
        <div>
          <button
            className="d-block d-md-none bg-body border-0 fs-1 text-danger fw-bold p-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <BsList />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Offcanvas right</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className=" ">
                <h6
                  className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold`}
                >
                  Quản lý giao dịch
                </h6>

                <div>
                  <ul className="list-unstyled">
                    <li
                      className="mt-2"
                      type="button"
                      onClick={() => {
                        navigate("/Order");
                        window.location.reload();
                      }}
                    >
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
                <h6
                  className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold `}
                >
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" d-none d-md-block">
        <h6
          className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold`}
        >
          Quản lý giao dịch
        </h6>

        <div>
          <ul className="list-unstyled">
            <li
              className="mt-2"
              type="button"
              onClick={() => {
                navigate("/Order");
                window.location.reload();
              }}
            >
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
        <h6
          className={`${styles.manage} ${styles.colorManage} mt-3 py-1 ps-2 fw-bold `}
        >
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
      </div>
    </div>
  );
};

export default InforLayout;
