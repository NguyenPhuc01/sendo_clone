import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProduct } from "../../../features/product/ProductSlice";
import styles from "../../../pages/Home/Home.module.css";
const ProductLayout = (props) => {
  const { data } = useSelector(selectProduct);
  //     console.log("🚀 ~ file: ProductLayout.js ~ line 8 ~ ProductLayout ~ data", data)
  //   return (
  //     <Link
  //       key={data.id}
  //       to={`product/${product.id}/${product.slug}`}
  //       className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-3 rounded  mx-2`}
  //     >
  //       <img src className={`${styles.cardImg}`} alt="..." />
  //       <div className={`card-body p-2`}>
  //         <p className={`card-text ${styles.fzCardText} mt-1 mb-2`}>name</p>
  //         <h6 className="card-title">price</h6>
  //       </div>
  //       <div className="d-flex justify-content-between p-1">
  //         <span>TP.HCM</span>
  //         <span>đã bán 2</span>
  //       </div>
  //     </Link>
  //   );

  //   const renderProduct = () => {
  //     if (data.length) {
  //       return data.map((product, index) => {
  //         const data = {
  //           id: product.id,
  //           name: product.name,
  //           price: product.price,
  //           avatar: product.avatar,
  //           detail: product.detail,
  //           cate_id: product.cate_id,
  //         };
  //         return (
  //           <Link
  //             key={index}
  //             to={`product/${product.id}/${product.slug}`}
  //             className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-3 rounded  mx-2`}
  //           >
  //             <img
  //               src={product.avatar}
  //               className={`${styles.cardImg}`}
  //               alt="..."
  //             />
  //             <div className={`card-body p-2`}>
  //               <p className={`card-text ${styles.fzCardText} mt-1 mb-2`}>
  //                 {product.name}
  //               </p>
  //               <h6 className="card-title">
  //                 {product.price.toLocaleString()}.000đ
  //               </h6>
  //             </div>
  //             <div className="d-flex justify-content-between p-1">
  //               <span>TP.HCM</span>
  //               <span>đã bán 2</span>
  //             </div>
  //           </Link>
  //         );
  //       });
  //     }
  //   };

  return (
    <div>
      <Link
        to={props.to}
        className={`card ${styles.cardSize} shadow text-decoration-none text-black mt-3 rounded  mx-2`}
      >
        <img src={props.avatar} className={`${styles.cardImg}`} alt="..." />
        <div className={`card-body p-2`}>
          <p className={`card-text ${styles.fzCardText} mt-1 mb-2`}>
            {props.name}
          </p>
          <h6 className="card-title">{props.price}</h6>
        </div>
        <div className="d-flex justify-content-between p-1">
          <span>TP.HCM</span>
          <span>đã bán 2</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductLayout;
