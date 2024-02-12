import ArrowRightBig from "../image/arrowright-big.png";

export default function SectionThree(props) {
  return (
    <div className="container mr-top-94">
      <div className="row">
        <div className="col-6">
          <h2>{props.nameh1}</h2>
          <div className="d-flex align-items-baseline">
            <h3>{props.nameh2}</h3>
            <span>
              <img src={ArrowRightBig} style={{ paddingLeft: "20px" }}></img>
            </span>
          </div>
        </div>
        <div className="col-6">
          <p className="text-p-sec-3">{props.namep}</p>
        </div>
      </div>
    </div>
  );
}
