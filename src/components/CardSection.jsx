import Photocard1 from "../image/photocard_1.png";
import Photocard2 from "../image/photocard_2.png";
import Photocard3 from "../image/photocard_3.png";
import Photocard4 from "../image/photocard_4.png";

export default function CardSection() {
  return (
    <div className="container mr-top-107">
      <div className="row">
        <div className="col-3">
          <div className="card-box displey-center">
            <img src={Photocard1}></img>
            <h4>SIMULATION</h4>
            <p className="text-p-card">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="btn-card">TRY IT NOW</button>
          </div>
        </div>
        <div className="col-3">
          <div className="card-box displey-center">
            <img src={Photocard2}></img>
            <h4>EDUCATION</h4>
            <p className="text-p-card">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="btn-card">TRY IT NOW</button>
          </div>
        </div>
        <div className="col-3">
          <div className="card-box displey-center">
            <img src={Photocard3}></img>
            <h4>SELF-CARE</h4>
            <p className="text-p-card">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="btn-card">TRY IT NOW</button>
          </div>
        </div>
        <div className="col-3">
          <div className="card-box displey-center">
            <img src={Photocard4}></img>
            <h4>OUTDOOR</h4>
            <p className="text-p-card">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="btn-card">TRY IT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}
