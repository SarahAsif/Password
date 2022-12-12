import { useState } from "react";
import "./App.css";

const OTP = () => {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState("");
  const alerting = () => {
    if (data && newData) {
      alert("success");
    }
  };
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const newHandleChange = (event) => {
    setNewData(event.target.value);
  };
  const sendOTP = () => {
    alert("Resent OTP, Please check your phone!");
  };
  return (
    <div className="flex flex-col space-y-5">
      <div className="timeline">
        <div
          className="timeline-progress"
          style={{
            width: "100%",
          }}
        ></div>
        <div className="timeline-items">
          <div className="timeline-item"></div>
          <div className="timeline-item"></div>
        </div>
      </div>
      <div className="text-center text-slate-400 max-w-xs">
        Please enter one time code we have sent to you on your mobile number and
        set your new numeric PIN
      </div>
      <div className="flex flex-col space-y-5">
        <div className="text-left text-slate-400 space-y-5 flex flex-col">
          <div>Enter OTP Code</div>
          <div className="">
            <input
              type="text"
              className="input"
              placeholder="Enter OTP Code"
              value={data}
              maxLength={4}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-between text-slate-400 items-center gap-10">
          <button className="OTP" onClick={() => sendOTP()}>
            Resend OTP
          </button>
          <div className="font-semibold">24 sec</div>
        </div>
        <div className="">
          <div className="text-slate-400 text-left">
            <div>Enter New Pin</div>
            <input
              type="password"
              className="input"
              value={newData}
              maxLength={4}
              onChange={newHandleChange}
            />
          </div>
        </div>
      </div>
      <button
        className="bg-black text-white button"
        onClick={() => window.location.reload()}
      >
        Back
      </button>
      <button className="bg-black text-white button" onClick={() => alerting()}>
        Submit
      </button>
    </div>
  );
};

export default OTP;
