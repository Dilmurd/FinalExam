import { MdMailOutline } from "react-icons/md";
import "./Stay.scss";

function Stay() {
  return (
    <footer>

    <div className="footer__section">
      <div className="container"></div>
      <div className="footer__topj">
        <div className="footer__titles">
          <p className="footer__title">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
        </div>
        <form>
          <div className="inputs">
            <MdMailOutline />
            <input type="text" placeholder="Enter your email address" />
          </div>
          <div>
            <button className="footer__btn">Subscribe to Newsletter</button>
          </div>
        </form>
      </div>
    </div>
    </footer>
  );
}

export default Stay;
