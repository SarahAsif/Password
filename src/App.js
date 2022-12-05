import { isDisabled } from "@testing-library/user-event/dist/utils";
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
  let phone;
  const [page, setPage] = useState(0);

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
              </div>
              <First />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
