export default function FormArea() {
  return (
    <div className="container mar-top-112 form-section">
      <div>
        <p className="join-hydra-text">JOIN HYDRA</p>
        <p className="text-lets">Let’s Build Your VR Experience</p>
        <section className="section-center-form">
          <form>
            <label>
              <div className="input-center-area">
                <input
                  placeholder="First Name"
                  className="text-input-text"
                  type="text"
                ></input>
                <input
                  placeholder="Last Name"
                  className="text-input-text"
                  type="text"
                ></input>
              </div>
              <div className="input-center-area">
                <input
                  placeholder="Email"
                  className="text-input-text"
                  type="text"
                ></input>
                <input
                  placeholder="Phone Number"
                  className="text-input-text"
                  type="text"
                ></input>
              </div>
              <div className="input-center-area">
                <input
                  className="text-subject"
                  placeholder="Subject"
                  type="text"
                ></input>
              </div>
              <div>
                <textarea
                  className="form-area-form"
                  placeholder="Tell Us Something..."
                ></textarea>
              </div>
              <button type="submit" className="btn-send">SEND TO HYDRA</button>
            </label>
          </form>
        </section>
      </div>
    </div>
  );
}
