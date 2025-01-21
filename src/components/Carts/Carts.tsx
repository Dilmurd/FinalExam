import "./Carts.scss"
import { FaTrashCan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../api";
import Loading from "../Loading/Loading";

function Carts() {
  const { isPending, data} = useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      return request .get("/images").then(res => res.data)
    },
  })
  return (
    <main>
      <section className="cart">
        <div className="container">
          <div className="cart__top">
            <p>Your cart</p>
          </div>
          <div className="cart__wrapper">
              {isPending ? <Loading/> : 
            <div className="cart__product">
              {
                data?.map((item: any) => (
                  <div className="cart__infos">
                <div className="cart__img">
                <img src={item.url} alt={item.title} />
                </div>
                <div className="cart__titles">
                  <p className="cart__title">{item.title}</p>
                  <FaTrashCan className="trash"/>
                  <p className="cart__size">{item.size}</p>
                  <p className="cart__size">{item.color}</p>
                  <p className="cart__price">{item.price}</p>
                </div>
              </div>
              ))
            }
            </div>
          }
            <div className="check">
              <div className="check__orders">
                  <p className="check__title">Order Summary</p>
                  <div className="check__counts">
                    <p className="check__inf">Subtotal</p>
                    <p className="check__price">$150</p>
                  </div>
                  <div className="check__counts">
                    <p className="check__inf">Discount (-20%)</p>
                    <p className="check__price">$150</p>
                  </div>
                  <div className="check__countss">
                    <p className="check__inf">Delivery Fee</p>
                    <p className="check__price">$113</p>
                  </div>
                  <div className="check__counts">
                    <p className="check__inf">Total</p>
                    <p className="check__price">$467</p>
                  </div>
                  <div className="check__btns">
                    <button>Checkout<FaArrowRight/></button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Carts