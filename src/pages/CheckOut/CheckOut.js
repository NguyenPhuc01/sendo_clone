import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Layout/DefaultLayout/Header";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import axios from "axios";
// import serviceCallApi from "../../Service/Service";
// import { useNavigate } from "react-router-dom";
import { nameInfor } from "../../utils";
// console.log(nameInfor.token);

const accessToken = nameInfor?.token;
const url = `http://khanh.tokyo/api/order`;
const config = {
  headers: { Authorization: `Bearer ${accessToken}` },
};
const CheckOut = () => {
  // const navigate = useNavigate();
  const { items } = useCart();

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
  const onSubmit = async (data) => {
    console.log({ items });
    let newItems = items.map((e) => {
      return {
        ...e,
        product_id: e.id,
      };
    });
    const orderProduct = {
      user_id: nameInfor.id,
      full_name: data.fullName,
      phone: data.phone,
      address: data.address,
      item: newItems,
    };
    try {
      console.log({ config });
      axios
        .post(url, orderProduct, config)
        .then((res) => console.log({ res }))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log("loi");
    }
  };

  useEffect(() => {}, []);
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

                  <input
                    {...register("phone", { required: true })}
                    onChange={(e) => {}}
                  />
                  {errors.phone && (
                    <p className="mb-0 text-danger">
                      Trường này không được bỏ trống
                    </p>
                  )}
                </div>
                <div className="d-flex flex-column mt-2">
                  <label htmlFor="">Địa chỉ </label>

                  <input
                    {...register("address", { required: true })}
                    onChange={(e) => {}}
                  />
                  {errors.address && (
                    <p className="mb-0 text-danger">
                      Trường này không được bỏ trống
                    </p>
                  )}
                </div>

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
