import Rating from "@mui/material/Rating";
import Loading from "../Loading/Loading";
import { useGetProductsQuery } from "../../redux/api/product-api";
import { useNavigate } from "react-router-dom";

function SecondProduct() {
  const {data,isLoading} =  useGetProductsQuery([])
  const navigate = useNavigate()
  
  return (
    <main>
      <section className="product">
        <div className="container">
          <h2>TOP SELLING</h2>
          {
            isLoading ? <Loading/> :
          <div className="product__wrapper">
            {data?.map((pro: { id: number; url: string; name: string; rating: number; price: string }) => (
              <div className="product__card" key={pro.id}>
                <div className="product__img">
                  <img src={pro.url} onClick={() => navigate(`/products/${pro.id}`)} alt="" />
                </div>
                <div className="product__text">
                  <p>{pro.name}</p>
                  <div className="mui__rating">
                    <Rating
                      name="read-only"
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
          }
        </div>
      </section>
    </main>
  );
}

export default SecondProduct;