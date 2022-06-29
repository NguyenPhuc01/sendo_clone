import serviceCallApi from "../Service/serviceApi";
const infor = localStorage.getItem("userData");
const nameInfor = JSON.parse(infor);
async function getOrderProduct() {
  try {
    const result = await serviceCallApi(
      "order",
      "GET",
      null,
      null,
      nameInfor?.token
    );
    // const response = { token: result.data.token, user: result.data };
    return result;
  } catch (error) {
    return error;
  }
}

function signout(apiContext = {}) {}
export { getOrderProduct, signout };
