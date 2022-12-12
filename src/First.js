import React, { useEffect } from "react";
import { useState } from "react";
import OTP from "./OTP";

// import { useFormik } from "formik";

const First = () => {
  const PageArray = ["", ""];
  const [phone, setPhone] = useState("");
  const [page, setPage] = useState(0);
  const handleChange = (value) => {
    if (value.match(/^[0-9]+$/)) {
      setPhone(value);
    }
  };
  const checkLength = (value) => {
    if (phone.length === 10) {
      setPage(1);
    }
  };

  return (
    <>
      {page === 0 ? (
        <div>
          <div className="timeline">
            <div
              className="timeline-progress"
              style={{
                width: "50%",
              }}
            ></div>
            <div className="timeline-items">
              <div className="timeline-item"></div>
              <div className="timeline-item"></div>
            </div>
          </div>
          <div className="text-left text-slate-400 space-y-5">
            <label htmlFor="phone">Enter Phone Number</label>
            <div>
              <input
                id="phone"
                value={phone}
                name="phone"
                type="text"
                className="input"
                placeholder="+92 333 2393838"
                maxLength={10}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
            <button
              className="bg-black w-full text-white p-2 mt-2"
              onClick={(e) => {
                e.preventDefault();
                checkLength();
              }}
            >
              {phone.length === 10 ? "Next" : "Enter"}
            </button>
          </div>
        </div>
      ) : (
        <OTP />
      )}
    </>
  );
};

export default First;
