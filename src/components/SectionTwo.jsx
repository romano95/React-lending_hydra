import Location from "../image/Location.png";
import Phon from "../image/phone-call.png";
import Message from "../image/message.png";

export default function SectionTwo() {
  return (
    <div className="container">
      <div className="row box-container-sec-2">
        <div className="col-4 ">
          <div className="d-flex justify-content-evenly">
            <img src={Location} className="img-1"></img>
            <div>
              <p className="p-text-sec2">Pay Us a Visit</p>
              <p className="ptext-sec2">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-evenly">
            <img src={Phon} className="img-2"></img>
            <div>
              <p className="p-text-sec2">Give Us a Call</p>
              <p className="ptext-sec2">(110) 1111-1010</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-evenly">
            <img src={Message} className="img-3"></img>
            <div>
              <p className="p-text-sec2">Send Us a Message</p>
              <p className="ptext-sec2">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
