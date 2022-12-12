import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./App.css";
import First from "./First";
import OTP from "./OTP";

function App() {
  return (
    <>
      <div className="bg-violet-800 h-screen flex text-center">
        <div className="flex flex-row items-center m-auto space-x-36">
          <div className="text-3xl font-bold text-white w-1/2">
            Great! We are almost there
          </div>
          <div className="bg-white widths shadow-md shadow-white	">
            <div className="p-16 flex flex-col">
              <div className="text-violet-800 font-semibold text-2xl">
                Forgot Pin?
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
