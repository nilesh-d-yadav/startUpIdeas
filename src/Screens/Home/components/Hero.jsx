import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="my-8 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 Productive ideas for your next startup{" "}
      </h2>
      <h2 className="text-center my-3">
        <strong className="text-secondary">Like your favourite ideas. </strong>
        Write your best Ideas, no account needed!
      </h2>

      <div>
        <select
          onChange={(event) => setTheme(event.target.value)}
          className="select select-bordered border-primary w-full max-w-xs"
        >
          <option disabled selected>
            Select Theme
          </option>
          <option>light</option>
          <option>dark</option>
          <option>bumblebee</option>
          <option>halloween</option>
          <option>corporate</option>
          <option>synthwave</option>
          <option>autumn</option>
          <option>lemonade</option>
          <option>coffee</option>
          <option>winter</option>
          <option>sunset</option>
          <option>dim</option>
          <option>nord</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
