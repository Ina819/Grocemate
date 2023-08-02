import React from "react";
import { Container } from "../components/AppStyle";
import styles from "./../styles/Basket.module.css";
import dummyProduct1 from "./../assets/dummyProduct1.png";

const dummyBasket = [
  {
    supplier: "supplierName1",
    foodName: "foodName1",
    img: dummyProduct1,
    price: "£8.00",
  },
  {
    supplier: "supplierName2",
    foodName: "foodName2",
    img: dummyProduct1,
    price: "£8.00",
  },
];

function Basket() {
  return (
    <Container>
      <div className={styles.basketContainer}>
        <div>
          <h1 style={{ textAlign: "center" }}>Basket</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>
                <input type="checkbox" id="selectAll" />
                <label htmlFor="selectAll" style={{ marginLeft: 20 }}>
                  select all(/)
                </label>
              </span>
              <button className={styles.btn}>Clear basket</button>
            </div>

            <div
              style={{
                marginTop: 5,
                borderTop: "2px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              {dummyBasket.map((product, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    paddingTop: 20,
                    paddingBottom: 20,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <input type="checkbox" id="select" />
                    <img
                      src={product.img}
                      style={{
                        width: 100,
                        height: 100,
                        marginLeft: 20,
                        marginRight: 20,
                      }}
                      alt={product.foodName}
                    />
                    <div>
                      <p>{product.supplier}</p>
                      <p>{product.foodName}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>{product.price}</p>
                    <span style={{ paddingLeft: 30, paddingRight: 30 }}>x</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "30%",
              margin: 10,
              padding: 10,
              backgroundColor: "#ECEAEA",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Subtotal (1 Items):</p>
              <p>£8</p>
            </span>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Discount: :</p>
              <p>£0</p>
            </span>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Shipping fee:</p>
              <p>£4</p>
            </span>
            <button style={{ justifySelf: "flex-end" }} className={styles.btn}>
              Add £12 of items to get free shipping
            </button>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Total:</p>
              <p>£12</p>
            </span>
            <button className={styles.btn}>1% points from subtotal</button>
            <button className={styles.checkoutBtn}>CHECK OUT</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Basket;
