import React from "react";
import styles from "./../styles/HomeItemCarousel.module.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Button } from "react-bootstrap";
import arrow_right from "./../assets/arrow_right.svg";

function NextTo(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <img
        src={arrow_right}
        style={{
          ...style,
          transform: "scale(1.3)",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 5,
          position: "absolute",
          top: 0,
          border: "1px solid black",
        }}
        onClick={onClick}
        alt="arrow_right"
      />
    </div>
  );
}

function PrevTo(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className}>
      <img
        src={arrow_right}
        style={{
          ...style,
          transform: "rotate(180deg) scale(1.3)",
          backgroundColor: "white",
          borderRadius: 20,
          padding: 5,
          position: "absolute",
          top: 0,
          left: -25,
          border: "1px solid black",
        }}
        onClick={onClick}
        alt="arrow_left"
      />
    </div>
  );
}

const HomeItemCarousel = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    nextArrow: <NextTo />,
    prevArrow: <PrevTo />,
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <div>
          <Button
            variant="success"
            className={styles.carouselBtn}
            href="/salads/detail"
          >
            View all
          </Button>
          <h2 className={styles.containerTitle}>{title}</h2>
          <div>
            <Slider {...settings}>
              {data.map((item, idx) => (
                <div key={idx}>
                  <img
                    src={item.src}
                    style={{
                      width: "100%",
                      padding: "15px",
                      borderRadius: 30,
                    }}
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
