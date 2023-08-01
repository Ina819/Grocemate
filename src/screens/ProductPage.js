import React from "react";
import { Image } from "react-bootstrap";
import { styled } from "styled-components";
import dummy1 from "./../assets/dummyProduct1.png";
import dummy2 from "./../assets/dummyProduct2.png";
import dummy3 from "./../assets/dummyProduct3.png";
import dummy4 from "./../assets/dummyProduct4.png";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
`;

const productList = [
  {
    foodName: "example1",
    price: 1000,
    supplier: "A COMPANY",
    imageSrc: dummy1,
  },
  {
    foodName: "example2",
    price: 2000,
    supplier: "B COMPANY",
    imageSrc: dummy2,
  },
  {
    foodName: "example3",
    price: 3000,
    supplier: "C COMPANY",
    imageSrc: dummy3,
  },
  {
    foodName: "example4",
    price: 4000,
    supplier: "D COMPANY",
    imageSrc: dummy4,
  },
  {
    foodName: "example5",
    price: 1000,
    supplier: "E COMPANY",
    imageSrc: dummy1,
  },
  {
    foodName: "example6",
    price: 2000,
    supplier: "F COMPANY",
    imageSrc: dummy2,
  },
  {
    foodName: "example7",
    price: 3000,
    supplier: "G COMPANY",
    imageSrc: dummy3,
  },
  {
    foodName: "example8",
    price: 4000,
    supplier: "H COMPANY",
    imageSrc: dummy4,
  },
];

const ProductPage = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        textAlign: "center",
      }}
    >
      <p className="h1 fw-bold">Salads Poke</p>
      <ProductContainer>
        {productList.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              marginLeft: "30px",
              marginRight: "30px",
              marginTop: "30px",
            }}
          >
            <Link
              to="/salads/detail"
              style={{
                color: "black",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              <Image src={item.imageSrc} rounded />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                }}
              >
                <span>{item.supplier}</span>
                <span>{item.foodName}</span>
                <span>{item.price}</span>
              </div>
            </Link>
          </div>
        ))}
      </ProductContainer>
    </div>
  );
};

export default ProductPage;
