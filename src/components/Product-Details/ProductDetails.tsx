import { useParams } from "react-router-dom";
import { useGetDetailImgQuery } from "../../redux/api/product-api";
import "./ProductDetails.scss";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

function ProductDetails() {
  const { id } = useParams();
  const { data: image, isLoading } = useGetDetailImgQuery(id);
  const [value] = React.useState<number | null>(5);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [count, setCount] = useState(1);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };


  return (
    <main>
      <section className="detail">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="detail__wrapper">
              {image?.map(
                (item: {
                  id: string;
                  url: string;
                  title: string;
                  second: string;
                  third: string;
                  price: number;
                  delprice: number;
                  desc: string;
                }) => (
                  <>
                    <div className="detail__card">
                      <div className="detail__imgs">
                        <img className="imgs" src={item.url} alt={item.title} />
                        <img className="imgs" src={item.second} alt="" />
                        <img className="imgs" src={item.third} alt="" />
                      </div>
                      <img className="big__img" src={item.url} alt="" />
                    </div>
                    <div className="detail__texts">
                      <p className="detail__name">{item.title}</p>
                      <div className="detail__rating">
                        <Rating name="read-only" value={value} readOnly />
                        <Typography component="legend">5</Typography>
                      </div>
                      <div className="detail__prices">
                        <p className="detail__price">{item.price}</p>
                        <del className="detail__del">{item.delprice}</del>
                        <p className="detail__sale">-40%</p>
                      </div>
                      <p className="detail__desc">{item.desc}</p>
                      <div className="detail__colors">
                        <p className="detail__color">Select Colors</p>
                        <div className="detail__option">
                          <div
                            className={`detail__colorss ${
                              selectedColor === "color1" ? "active" : ""
                            }`}
                            onClick={() => handleColorSelect("color1")}
                          ></div>
                          <div
                            className={`detail__col ${
                              selectedColor === "color2" ? "active" : ""
                            }`}
                            onClick={() => handleColorSelect("color2")}
                          ></div>
                          <div
                            className={`detail__colo ${
                              selectedColor === "color3" ? "active" : ""
                            }`}
                            onClick={() => handleColorSelect("color3")}
                          ></div>
                        </div>
                      </div>
                      <div className="detail__sizes">
                        <p className="detail__choosing">Choose Size</p>
                        <div className="detail__main-size">
                          <div
                            className={`detail__size ${
                              selectedSize === "Small" ? "active" : ""
                            }`}
                            onClick={() => handleSizeSelect("Small")}
                          >
                            <button>Small</button>
                          </div>
                          <div
                            className={`detail__size ${
                              selectedSize === "Large" ? "active" : ""
                            }`}
                            onClick={() => handleSizeSelect("Large")}
                          >
                            <button>Large</button>
                          </div>
                          <div
                            className={`detail__size ${
                              selectedSize === "Medium" ? "active" : ""
                            }`}
                            onClick={() => handleSizeSelect("Medium")}
                          >
                            <button>Medium</button>
                          </div>
                          <div
                            className={`detail__size ${
                              selectedSize === "X-Large" ? "active" : ""
                            }`}
                            onClick={() => handleSizeSelect("X-Large")}
                          >
                            <button>X-Large</button>
                          </div>
                        </div>
                      </div>
                      <div className="detail__incss">
                        <div className="detail__incs">
                          <button
                            className="detail__dec"
                            onClick={() => setCount((p) => p - 1)}
                          >
                            -
                          </button>
                          <span className="detail__count">{count}</span>
                          <button
                            className="detail__inc"
                            onClick={() => setCount((p) => p + 1)}
                          >
                            +
                          </button>
                        </div>
                        {image?.map((item: { id: string; title: string; price: number; }) => (
                          <div key={item.id} className="detail__wrapper">
                            <div className="detail__submit">
                              <button
                                className="detail__add"
                                onClick={() => alert("Product Added Succesfully")}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
