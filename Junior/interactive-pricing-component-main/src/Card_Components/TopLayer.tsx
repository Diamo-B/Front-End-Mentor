import { useState } from "react";
import BillingOptions from "./BillingOptions";

const TopLayer = () => {
  const [value, setValue] = useState(2);
  const pageviews: Number[] = [10, 50, 100, 500, 1];

  return (
    <>
      <p className=" uppercase text-GrayishBlue-700 text-center tracking-wider mb-10">
        {pageviews[value] + (value != 4 ? "k" : "M") /* Linking the array witht the value */} pageviews
      </p>

      <input type="range" min={0} max={4} value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
        className="block mx-auto w-5/6 mb-12 slider" /* View app.css for the slider class */
      />
      <p className="flex items-center justify-center gap-2 mb-12">
        <span className=" text-4xl font-bold">$16.00</span>{" "}
        <span className="  text-GrayishBlue-700">/ month</span>
      </p>
      <BillingOptions />
    </>
  );
};

export default TopLayer;

