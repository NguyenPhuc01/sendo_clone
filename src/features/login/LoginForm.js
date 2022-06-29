import React from "react";
import styles from "../../pages/Login/Login.module.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import Example from "../../components/Loading/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "./LoginFormSlice";
// import axios from "axios";
// import { login, } from "./LoginFormSlice";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  // const { loading, loggedIn, error, token } = useSelector(selectSignin);
  // console.log("🚀 ~ file: LoginForm.js ~ line 21 ~ LoginForm ~ token", token);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
      rememberMe: true,
    };

    try {
      await dispatch(login(formData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {/* <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            defaultValue=""
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", { required: true })}
          />
          <div id="emailHelp" className="form-text">
            {errors.email && <p className="text-danger">Bạn phải nhập email</p>}
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

        <div className="d-flex justify-content-between">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
          <div>
            <button className="bg-body border-0">Forgot Password?</button>
          </div>
        </div>

        <div className=" d-flex justify-content-between mt-4">
          <button type="submit" className="btn btn-primary  ">
            Đăng Nhập
          </button>
          <ToastContainer />
          <Link to="/Registration" className="text-white text-decoration-none ">
            <button type="submit" className="btn btn-primary  ">
              Đăng Ký
            </button>
          </Link>
        </div>

        <div className="text-center text-black-50 mt-5">
          <span>or sign up using</span>
          <div>
            <button className="bg-body border-0">
              <img
                src="facebook.png"
                alt=""
                className={`${styles.icon} mt-3`}
              />
            </button>
            <button className="bg-body border-0">
              <img
                src="twitter.png"
                alt=""
                className={`${styles.icon} mt-3 `}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
