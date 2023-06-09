import React from "react";
import styles from "./../styles/HomeItemCarousel.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";

const HomeItemCarousel = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
  };
  return (
    <>
      <div className={styles.carouselContainer}>
        <div>
          <Button variant="success" className={styles.carouselBtn}>
            View all
          </Button>
          <h2 className={styles.containerTitle}>{title}</h2>
          <div>
            <Slider {...settings}>
              {data.map((item, idx) => (
                <div key={idx}>
                  <img
                    src={item.src}
                    style={{ width: "100%", padding: "15px" }}
                    alt="itemImg"
                  />
                  <div style={{ padding: "15px" }}>
                    <span className={styles.itemName}>{item.name}</span>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>&nbsp;</div>
    </>
  );
};

export default HomeItemCarousel;
