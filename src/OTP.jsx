import React from "react";

const OTP = () => {
  return (
    <>
      <div className="text-center text-slate-400 max-w-xs">
        Please enter one time code we have sent to you on your mobile number and
        set your new numeric PIN
      </div>
      <div className="text-left text-slate-400 space-y-5">
        <div>Enter OTP Code</div>
        <div className="">
          <input type="text" className="input" placeholder="Enter OTP Code" />
        </div>
      </div>
      <div className="flex justify-between text-slate-400 items-center gap-10">
        <button className="OTP">Resend OTP</button>
        <div className="font-semibold">24 sec</div>
      </div>
      <div>
        <div className="text-slate-400 text-left">
          <div>Enter New Pin</div>
          <input type="text" className="input" />
        </div>
        <button
          className="bg-black w-full text-white p-2"
          onClick={() => window.location.reload()}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default OTP;
