import React from "react";

const First = () => {
  return (
    <div>
      <div className="bg-white widths shadow-md shadow-white	">
        <div className="p-16 space-y-5">
          <div className="text-violet-800 font-semibold text-2xl">
            Forgot Pin?
          </div>
          <div className="text-center text-slate-400">
            Enter your mobile number below
          </div>
          <div className="text-left text-slate-400 space-y-5">
            <div>Mobile Number</div>
            <div>
              <input
                type="text"
                className="input"
                placeholder="+92 333 2393838"
              />
            </div>
          </div>
          <div>
            <button className="bg-black w-full text-white p-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
