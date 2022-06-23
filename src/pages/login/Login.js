import React from "react";
import styles from "./Login.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Example from "../../components/Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "../../features/login/LoginForm";
import { useSelector } from "react-redux";

import { selectSignin } from "../../features/login/LoginFormSlice";

// import Loading from "react-loading";
const Login = () => {
 
  const { loading } = useSelector(selectSignin);

  return (
    <Container fluid>
      <Row className={styles.height}>
        <Col lg="8">
          <div className="d-none d-lg-block">
            <img src="bg-01.jpg" alt="" className={`${styles.imgLeft} w-100`} />
          </div>
        </Col>
        <Col lg="4">
          <div
            className={`d-flex flex-column  justify-content-center align-content-center ${styles.Login}`}
          >
            <h1 className="text-center mb-5">Login to continue</h1>
            {loading ? <Example /> : <LoginForm />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
