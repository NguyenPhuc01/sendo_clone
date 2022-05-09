import React, { useState } from "react";
import styles from "../login/Login.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container fluid>
      <Row className={styles.height}>
        <Col lg="4">
          <div
            className={`d-flex flex-column  justify-content-center align-content-center ${styles.Login}`}
          >
            <h1 className="text-center mb-5">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  defaultValue=""
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("name", { required: true })}
                />
                <div id="exampleInputEmail1" className="form-text">
                  {errors.name && (
                    <p className="text-danger">Bạn phải nhập Name</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  defaultValue=""
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  {...register("email", { required: true })}
                />
                <div id="email" className="form-text">
                  {errors.email && (
                    <p className="text-danger">Bạn phải nhập email</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("password", { required: true })}
                />
                <div id="emailHelp" className="form-text">
                  {errors.password && (
                    <p className="text-danger">Bạn phải nhập password</p>
                  )}
                </div>
              </div>

              <Link to="/login" className="text-white text-decoration-none">
                <button type="submit" className="btn btn-primary  mt-4 w-100">
                  Đăng Ký
                </button>
              </Link>

              <div className="text-center text-black-50 mt-5">
                <span>or sign up using</span>
                <div>
                  <button className="bg-body border-0">
                    <img
                      src="../facebook.png"
                      alt=""
                      className={`${styles.icon} mt-3`}
                    />
                  </button>
                  <button className="bg-body border-0">
                    <img
                      src="../twitter.png"
                      alt=""
                      className={`${styles.icon} mt-3 `}
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Col>
        <Col lg="8">
          <div>
            <img
              src="../bg-01.jpg"
              alt=""
              className={`${styles.imgLeft} w-100`}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
