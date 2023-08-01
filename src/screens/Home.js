import React from "react";
import styles from "./../styles/Home.module.css";
import HomeContents from "../components/HomeContents";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#00632d" }}>
      <div className="d-flex">
        <div className={styles.leftContainer}>
          <div
            class="p-3 mb-4 bg-body-tertiary rounded-3 d-flex align-items-center"
            style={{ height: "100vh" }}
          >
            <div class="container-fluid py-5">
              <p class="display-3 fw-bold text-white">GroceMates</p>
              <h3 class="display-5 fw-bold text-white">Feed your energy</h3>
              <p class="col-md-8 fs-4 text-white">
                Healthy, delicious and easy meals made your life happier and
                joyful.
              </p>
              <Link to="/salads">
                <button class="btn btn-warning fw-bold btn-lg" type="button">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
      <HomeContents />
    </div>
  );
};

export default Home;
