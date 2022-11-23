import { useState } from "react";
import "./App.css";
import First from "./First";
import OTP from "./OTP";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="bg-violet-800 h-screen flex text-center">
        <div className="flex flex-row items-center m-auto space-x-36">
          <div className="text-3xl font-bold text-white w-1/2">
            Great!
            <br />
            We are almost there
          </div>
          {value == 1 ? <First /> : value == 2 ? <OTP /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
