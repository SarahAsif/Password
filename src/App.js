import { useState } from "react";
import "./App.css";
import First from "./First";
import OTP from "./OTP";

function App() {
  // const [value, setValue] = useState(1);
  const BASEURL = "http://localhost:3000";

  const [formData, setFormData] = useState({
    phone: "",
  });
  const [page, setPage] = useState(0);
  const questionArray = [
    "Enter your mobile number below",
    "Please enter one time code we have sent to you on your mobile number and set your new numeric PIN",
  ];
  const PageArray = ["", ""];
  const progressbar = ["box1", "box2"];
  const Display = () => {
    if (page == 1) {
      return <OTP formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="bg-violet-800 h-screen flex text-center">
        <div className="flex flex-row items-center m-auto space-x-36">
          <div className="text-3xl font-bold text-white w-1/2">
            Great! We are almost there
          </div>
          <div className="bg-white widths shadow-md shadow-white	">
            <div className="p-16 space-y-5">
              <div className="text-violet-800 font-semibold text-2xl">
                Forgot Pin?
              </div>
              <div className="timeline">
                <div
                  className="timeline-progress"
                  style={{
                    width: page === 0 ? "50%" : page == 1 ? "100%" : page == 1,
                  }}
                ></div>
                <div className="timeline-items">
                  <div className="timeline-item"></div>
                  <div className="timeline-item"></div>
                </div>
                <span></span>
              </div>
              <div className="text-center text-slate-400">
                {questionArray[page]}
              </div>
              <form>
                <div className="text-left text-slate-400 space-y-5">
                  <label htmlFor="phone">Enter Phone Number</label>
                  <div>
                    <input
                      id="phone"
                      name="phone"
                      type="number"
                      className="input"
                      placeholder="+92 333 2393838"
                    />
                  </div>
                </div>
              </form>
              <button
                className="bg-black w-full text-white p-2"
                onClick={() => {
                  if (page === PageArray.length - 1) {
                    alert("done");
                  } else {
                    setPage((currentPage) => currentPage + 1);
                  }
                }}
              >
                {page === PageArray.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
          {/* {value == 1 ? <First /> : value == 2 ? <OTP /> : null} */}
        </div>
      </div>
    </>
  );
}

export default App;
