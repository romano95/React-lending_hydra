import HydraOne from "../image/Hydratech1.png";
import HydraTwo from "../image/Hydratech2.png";
import HydraThree from "../image/Hydratech3.png";
import HydraFour from "../image/Hydratech4.png";

export default function SectionSix() {
  return (
    <div className="container mar-top-100 ">
      <div className="row align-items-center">
        <div className="col-3">
          <img src={HydraOne}></img>
        </div>
        <div className="col-3">
          <img src={HydraTwo}></img>
        </div>
        <div className="col-3">
          <img src={HydraThree}></img>
        </div>
        <div className="col-3">
          <img src={HydraFour}></img>
        </div>
      </div>
    </div>
  );
}
