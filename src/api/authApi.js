import serviceCallApi from "../Service/serviceApi";

async function signing({ email, password }) {
  const data = { email, password };
  try {
    const result = await serviceCallApi("login", "POST", data);
    const response = { token: result.data.token, user: result.data };
    return response;
  } catch (error) {
    return error;
  }
}

function signout() {}
export { signing, signout };
