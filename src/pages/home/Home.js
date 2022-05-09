import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/DefaultLayout/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <ul>
        <li>
          <Link to="login">login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
