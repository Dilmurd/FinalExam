import "./Hero.scss";

const hero = [
  {
    num: "200+",
    desc: "International Brands",
  },
  {
    num: "2,000+",
    desc: "High-Quality Products",
  },
  {
    num: "30,000+",
    desc: "Happy Customers",
  },
];

function Hero() {
  const ratings = hero?.map((item, inx) => (
    <div className="rating" key={inx}>
      <p className="hero__num">{item.num}</p>
      <p className="hero__subtitle">{item.desc}</p>
    </div>
  ));
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">

          <div className="hero__text">
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className="hero__desc">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button>Shop Now</button>
            <div className="ratings">{ratings}</div>
          </div>
          <div className="hero__img">
            <img src="https://s3-alpha-sig.figma.com/img/b26f/ea69/ccfd8aa5825862cdb9604a4fb4930464?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DT~REuOHX43rXu2v4XZon6g0ZltLdxZmznZlP0CMKFy5MpnqelKydpsJJGDt-J8jnmfCgB0nf2~0Co2QiKxR5rAemiuuzDLthTp8t7Cp4Vemfws6d6pVQzW0X2MviPpbei70SBDTHYVpyULzcNLCFhVMhNGCrbnLDFUkr84SCddaW-uVhK2-ctkvuVgn~9sfm76syhhPDpwlT8Rg~YtwvsDty~Qu-udwFYkUlUDK~L8Cft5GVS1S-X2wA64LQvnkTUZdXqVDymTY3rxIEqxCVzbtR3kRJ-w9rbp-~CzssEgbpEXcoVgA5pgIroK37VF0t2tB2mNnczvk0vMNIItxfg__" alt="" />
          </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
