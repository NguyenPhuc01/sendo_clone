import React, { useEffect, useState } from "react";
import styles from "../login/Login.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const axios = require("axios").default;

const Registration = () => {
  const {
    register,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handlRegister = () => {
    const values = getValues();

    console.log(values);
  };

  const [api, setApi] = useState([]);

  const postApi = async () => {
    try {
      const data = {
        email: "phuc123",
        password: "123456",
      };

      const result = await axios({
        method: "POST",
        url: "http://khanh.tokyo/api/register",
        data,
      });
      // console.log(result.data);
      setApi(result.data);
    } catch (errors) {
      console.log("loi");
    }
  };
  console.log(api.data);

  useEffect(() => {
    postApi();
  }, []);

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
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  {...register("Cpassword", { required: true })}
                />
                <div id="emailHelp" className="form-text">
                  {errors.Cpassword && (
                    <p className="text-danger">Bạn phải nhập Cpassword</p>
                  )}
                </div>
              </div>

              <Link
                to=""
                className="text-white text-decoration-none btn btn-primary mt-4 w-100"
                onClick={handlRegister}
              >
                Đăng Ký
              </Link>
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
