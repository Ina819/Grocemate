import React, { useState } from "react";
import dummy1 from "./../assets/dummyProduct1.png";
import { PageContainer } from "../components/AppStyle";
import styles from "./../styles/ProductDetailPage.module.css";
import dummyDetail from "./../assets/dummyDetail.png";
import DetailReview from "../components/Detail/DetailReview";

function ProductDetailPage() {
  const [mode, setMode] = useState("detail");
  return (
    <PageContainer>
      <div className={styles.detailContainer}>
        <img src={dummy1} alt="product-img" style={{ width: "350px" }} />
        <div style={{ marginLeft: "50px" }}>
          <h4>Supplier</h4>
          <h2>[Food Name]</h2>
          <h2>[Price]</h2>
          <div className={styles.promotionBanner}>
            <h3>Promotion banner</h3>
          </div>
          <h5>About this item</h5>
          <p>
            Exciting authentic food deliciously prepared for you <br />
            It is high in protein and incredibly easy to mix everything up.
            <br />
            High in calcium, vitamin A, C and E.
          </p>
          <div>
            <button className={styles.addToBasketBtn}>Add to basket</button>
            <button className={styles.orderBtn}>Order Now</button>
          </div>
        </div>
      </div>

      <div className={styles.btnBox}>
        <button
          className={mode === "detail" ? styles.clickedBtn : styles.unclickBtn}
          onClick={() => setMode("detail")}
        >
          Product detail
        </button>
        <button
          className={
            mode === "ingredients" ? styles.clickedBtn : styles.unclickBtn
          }
          onClick={() => setMode("ingredients")}
        >
          Ingredients
        </button>
        <button
          className={mode === "reviews" ? styles.clickedBtn : styles.unclickBtn}
          onClick={() => setMode("reviews")}
        >
          Reviews
        </button>
      </div>

      {mode === "detail" ? (
        <div className={styles.imageContainer}>
          <img src={dummyDetail} className={styles.detailImg} alt="detail" />
        </div>
      ) : mode === "ingredients" ? (
        <div>ingredients</div>
      ) : (
        <DetailReview />
      )}
    </PageContainer>
  );
}

export default ProductDetailPage;
