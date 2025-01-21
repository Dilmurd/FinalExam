import "./Product.scss";
import Rating from "@mui/material/Rating";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/product-api";

interface ProductType {
  id: string;
  url: string;
  name: string;
  rating: number;
  price: string;
}

function Product() {
  const { data, isLoading } = useGetProductsQuery({});
  const navigate = useNavigate();

  return (
    <main>
      <section className="product">
        <div className="container">
          <h2>NEW ARRIVALS</h2>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="product__wrapper">
              {data?.map((pro: ProductType) => (
                <div className="product__card" key={pro.id}>
                  <div className="product__img">
                    <img
                      onClick={() => navigate(`/products/${pro.id}`)}
                      src={pro.url}
                      alt={pro.name}
                    />
                  </div>
                  <div className="product__text">
                    <p>{pro.name}</p>
                    <div className="mui__rating">
                      <Rating
                        name={`rating-${pro.id}`}
                        className="rate"
                        value={pro.rating}
                        readOnly
                      />
                    </div>
                    <p className="product__price">{pro.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Product;
