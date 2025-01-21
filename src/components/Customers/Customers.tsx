import "./Customers.scss"
import Rating from '@mui/material/Rating';
import React from "react";
import { PiCheckCircleFill } from "react-icons/pi";

function Customers() {
    const [value] = React.useState<number | null>(5);
  return (
    <main>
        <section className="customer">
            <div className="container">
                <div className="customer__top">
                    <p>OUR HAPPY CUSTOMERS</p>
                </div>
                <div className="customer__wrapper">
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                    <div className="customer__card">
                    <Rating name="read-only" value={value} readOnly />
                    <div className="customer__user">
                    <p className="customer__title">Sarah M.</p>
                    <PiCheckCircleFill/>
                    </div>
                    <p className="customer__desc">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Customers;