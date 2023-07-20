import React from "react";
import dummy1 from "./../assets/dummyProduct1.png";
import { PageContainer } from "../components/AppStyle";
import styles from "./../styles/ProductDetailPage.module.css";
import dummyDetail from "./../assets/dummyDetail.png";

function ProductDetailPage() {
  return (
    <PageContainer>
      <div className={styles.detailContainer}>
        <img src={dummy1} alt="product-img" style={{ width: "450px" }} />
        <div style={{ marginLeft: "50px" }}>
          <h4>Supplier</h4>
          <h2>[Food Name]</h2>
          <h2>[Price]</h2>
          <div className={styles.promotionBanner}>Promotion banner</div>
          <h5>About this item</h5>
          <p>
            Exciting authentic food deliciously prepared for you <br />
            It is high in protein and incredibly easy to mix everything up. High
            in calcium, vitamin A, C and E.
          </p>
          <div>
            <button className={styles.addToBasketBtn}>Add to basket</button>
            <button className={styles.orderBtn}>Order Now</button>
          </div>
        </div>
      </div>

      <div className={styles.btnBox}>
        <button className={styles.clickedBtn}>Product detail</button>
        <button className={styles.unclickBtn}>Ingredients</button>
        <button className={styles.unclickBtn}>Reviews</button>
      </div>

      <div className={styles.imageContainer}>
        <img src={dummyDetail} className={styles.detailImg} />
      </div>
    </PageContainer>
  );
}

export default ProductDetailPage;
