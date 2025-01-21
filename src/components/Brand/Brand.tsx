import "./Brand.scss"
import versage from "../../assets/versage.png"
import zara from "../../assets/zara.png"
import gucci from "../../assets/gucci.png"
import prada from "../../assets/prada.png"
import calvin from "../../assets/calvin.png"


const images = [
    {
        img: versage
    },
    {
        img: zara
    },
    {
        img: gucci
    },
    {
        img: prada
    },
    {
        img: calvin
    },
]

function Brand() {
  return (
    <main>
        <section className="brand">
            <div className="container">
                <div className="brand__wrapper">
                    {
                        images?.map((img,inx) => (
                            <img src={img.img} alt="" key={inx}/>
                        ))
                    }
                </div>
            </div>
        </section>
    </main>
  )
}

export default Brand;