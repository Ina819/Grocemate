import React from "react";
import HomeItemCarousel from "./HomeItemCarousel";
import background from "./../assets/mainImage.png";

const data = [
  { name: "Food Name1", price: "Price", src: background },
  { name: "Food Name2", price: "Price", src: background },
  { name: "Food Name3", price: "Price", src: background },
  { name: "Food Name4", price: "Price", src: background },
  { name: "Food Name5", price: "Price", src: background },
  { name: "Food Name6", price: "Price", src: background },
  { name: "Food Name7", price: "Price", src: background },
  { name: "Food Name8", price: "Price", src: background },
];

const HomeContents = () => {
  return (
    <div>
      <HomeItemCarousel title="BEST PRODUCTS" data={data} />
      <HomeItemCarousel title="WHAT'S NEW TO YOU" data={data} />
      <HomeItemCarousel title="WE ARE NOW ON DEALS" data={data} />
    </div>
  );
};

export default HomeContents;
