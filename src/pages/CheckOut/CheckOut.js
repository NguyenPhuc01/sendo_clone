import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import axios from "axios";

const CheckOut = () => {
  const { items } = useCart();
  const infor = localStorage.getItem("infor");
  const nameInfor = JSON.parse(infor);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: nameInfor.name,
      sdt: "",
      location: "",
      Email: nameInfor.email,
    },
  });

  console.log(nameInfor);

  const onSubmit = async (data) => {
    const orderProduct = {
      user_id: nameInfor.id,
      full_Name: data.fullName,
      phone: data.phone,
      address: data.address,
      item: items,
    };
    console.log(
      "🚀 ~ file: CheckOut.js ~ line 43 ~ onSubmit ~ orderProduct",
      orderProduct
    );
    try {
      const order=axios.post(
        "http://khanh.tokyo/api/order",
        {
          orderProduct,
        },
        {
          headers: {
            Authorization: `Basic ${nameInfor.token}`,
          },
        }
      );
      console.log(order);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // axios
    //   .POST("http://khanh.tokyo/api/order", {
    //     headers: {
    //       Authorization: `token ${nameInfor.token}`,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col className="px-0">
            <div className="shadow bg-body">
              <h6 className="fw-bold text-uppercase  py-2 ms-2">
                Địa chỉ nhận hàng
              </h6>
            </div>
          </Col>
        </Row>
        <Row className="shadow bg-body pb-5">
          <Col lg="3" className="bg-body"></Col>
          <Col lg="6" className="bg-body pt-4">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-column">
                  <label htmlFor="">Họ và Tên </label>
                  <input {...register("fullName", { maxLength: 20 })} />
                </div>
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="">Email </label>
                  <input {...register("Email")} />
                </div>
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="">Số Điện Thoại </label>

                  <input {...register("phone", { required: true })} />
                  {errors.phone && (
                    <p className="mb-0 text-danger">
                      Trường này không được bỏ trống
                    </p>
                  )}
                </div>
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="">Địa chỉ </label>

                  <input {...register("address", { required: true })} />
                  {errors.address && (
                    <p className="mb-0 text-danger">
                      Trường này không được bỏ trống
                    </p>
                  )}
                </div>
                {/* <input
                  type="number"
                  {...register("age", { min: 18, max: 99 })}
                />
               
                <select {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select> */}
                <div className="d-flex justify-content-end mt-3">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </Col>
          <Col lg="3 " className=" bg-body "></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckOut;
