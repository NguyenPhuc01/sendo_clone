import { getOrderProduct } from "../api/orderProduct";

const TOKEN_KEY = "userInfo";
const USER_KEY = "userData";

export const auth = {
  isAuthenticated,
  getToken,
  order,
};

function isAuthenticated() {
  return !!getToken();
}

function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY);
}

async function order({
  full_name,
  phone,
  name,
  address,
  quantity,
  rememberMe,
  avatar,
}) {
  const { token, order } = await getOrderProduct({
    full_name,
    phone,
    name,
    address,
    rememberMe,
    quantity,
    avatar,
  });
  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(order));
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  return { token, order };
}
