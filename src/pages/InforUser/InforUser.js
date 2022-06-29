import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Header from "../../components/Layout/DefaultLayout/Header";
import InforLayout from "../../components/Layout/layOutInfor/InforLayout";
import styles from "../InforUser/InforUser.module.css";
import Footer from "../../../src/components/Footer/Footer";
const InforUser = () => {
  const infor = localStorage.getItem("userData");
  const nameInfor = JSON.parse(infor);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: nameInfor?.name,
      // sdt: "",
      // location: "",
      Email: nameInfor?.email,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(" chức năng này đang trong quá trình hoàn thiện");
  };
  return (
    <div>
      <Header />
      <Container className="mt-3">
        <Row>
          <Col md="4" lg="3">
            <InforLayout />
          </Col>
          <Col md="8" lg="9">
            <div className="mt-3 mt-md-0">
              <h6>Thông tin tài khoản</h6>
            </div>
            <hr />
            <Row>
              <Col md="2">
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className={`d-flex flex-column align-items-center ${styles.changeAvatar}`}
                  >
                    <img
                      src="data:image/gif;base64,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"
                      alt=""
                      className="w-100"
                    />
                    <button
                      className={`${styles.changeButton}  border-0 px-4 pb-1`}
                    >
                      Thay Đổi
                    </button>
                  </div>
                </div>
              </Col>
              <Col md="10">
                <div>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex flex-column">
                        <label htmlFor="">Họ và Tên </label>
                        <input
                          {...register("fullName", { maxLength: 20 })}
                          onChange={(e) => {}}
                        />
                      </div>
                      <div className="d-flex flex-column mt-2">
                        <label htmlFor="">Email </label>
                        <input {...register("Email")} onChange={(e) => {}} />
                      </div>
                      <div className="d-flex flex-column mt-2">
                        <label htmlFor="">Số Điện Thoại </label>
                        <input {...register("phone")} onChange={(e) => {}} />
                      </div>

                      <div className="d-flex flex-column mt-2">
                        <label htmlFor="">Giới Tính</label>

                        <div className=" d-flex mt-2">
                          <div className="me-5">
                            <input
                              {...register("radio")}
                              type="radio"
                              value="Nam"
                              onChange={(e) => {}}
                              id="nam"
                            />
                            <label htmlFor="nam" className="ms-2">
                              Nam
                            </label>
                          </div>

                          <div>
                            <input
                              {...register("radio", { required: true })}
                              type="radio"
                              value="Nữ"
                              id="nu"
                              onChange={(e) => {}}
                            />
                            <label htmlFor="nu" className="ms-2">
                              Nữ
                            </label>
                          </div>
                        </div>
                        {errors.radio && (
                          <p className="mb-0 text-danger">
                            Trường này không được bỏ trống
                          </p>
                        )}
                      </div>
                      <div className="d-flex flex-column mt-2 ">
                        <label htmlFor="">Ngày Sinh </label>

                        <input
                          {...register("date", { required: true })}
                          type="date"
                          onChange={(e) => {}}
                        />
                        {errors.date && (
                          <p className="mb-0 text-danger">
                            Trường này không được bỏ trống
                          </p>
                        )}
                      </div>

                      <div className="d-flex mt-3">
                        <input
                          type="submit"
                          value="Cập nhập"
                          className="bg-danger border-0 text-light px-5 py-2 fw-bold mt-4"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default InforUser;
