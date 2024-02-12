import PhotoH1 from "../image/Photo1.png";
import ArrowSmall from "../image/Arrowsmall.png";

export default function SectionOne() {
  return (
    <div className="container martop-sec-1">
      <div className="row">
        <div className="col-5">
          <h1>
            <span className="span-h1">Dive</span> Into The Depths <br /> Of {""}
            <span className="span-h1">Virtual Reality</span>
          </h1>
          <p className="p-text-sec-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </p>
          <button className="btn_build">BUILD YOUR WORLD</button>
          <span className="pad-lef-arrowsmall">
            <img src={ArrowSmall}></img>
          </span>
        </div>
        <div className="col-7 d-fl-img-1">
          <img src={PhotoH1}></img>
        </div>
      </div>
    </div>
  );
}
