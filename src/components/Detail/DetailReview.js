import React from "react";
import styles from "./../../styles/DetailReview.module.css";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import dummyImage1 from "./../../assets/dummyProfile1.png";
import dummyImage2 from "./../../assets/dummyProfile2.png";

const data = [
  { name: 5, value: 10, fill: "#00632D" },
  { name: 4, value: 8, fill: "#FFE588" },
  { name: 3, value: 4, fill: "#96C6FF" },
  { name: 2, value: 7, fill: "#FFCB7D" },
  { name: 1, value: 5, fill: "#FF8080" },
];

const dummyProfile = [
  {
    name: "Customer A",
    image: dummyImage1,
    reviews: 12,
    rating: 3,
    comment: "This is reasonable meal kit. Well packed.",
  },
  {
    name: "Customer B",
    image: dummyImage2,
    reviews: 12,
    rating: 4,
    comment:
      "I love this! I do not need to go Japanese restaurant If I order this amazing food. The one thing I don’t like is it is quite pricy but not bad. ",
  },
];

function DetailReview() {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.rating}>
        <div className={styles.totalReviews}>
          <h3>Total reviews</h3>
          <div style={{ display: "flex" }}>
            <h4>10.0k </h4>
            <div className={styles.reviewsIncrease}>21% UP</div>
          </div>
        </div>

        <div className={styles.AverageRating}>
          <h3>Average Rating</h3>
          <div style={{ display: "flex" }}>
            <h4>4.5</h4>
            <div>✨✨✨✨✨</div>
          </div>
        </div>

        <div style={{ padding: 0 }}>
          <BarChart width={250} height={150} data={data} layout="vertical">
            <XAxis type="number" tick={""} />
            <YAxis type="category" dataKey="name" interval={0} />
            <Bar dataKey="value" fill="#8884d8" barSize={10} />
          </BarChart>
        </div>
      </div>
      <div className={styles.reviewList}>
        {dummyProfile.map((item, idx) => (
          <div id={idx} className={styles.review}>
            <div style={{ display: "flex" }}>
              <img src={item.image} alt={`${item.name} profile`} />
              <div
                style={{
                  paddingLeft: 30,
                  paddingRight: 50,
                  marginRight: 50,
                }}
              >
                <h2>{item.name}</h2>
                <h4>Total reviews: {item.reviews}</h4>
              </div>
            </div>

            <div
              style={{
                marginLeft: 30,
                marginRight: 30,
                width: "300px",
              }}
            >
              <div>{"✨".repeat(item.rating)}</div>
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailReview;
