import React, { useState } from "react";

const Tab = () => {
  const [active, setActive] = useState();
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <a
        role="tab "
        href="/#hot"
        onClick={() => setActive(0)}
        className={`tab text-lg font-bold ${active === 0 && "tab-active"}`}
      >
        🔥Hot
      </a>
      <a
        role="tab"
        href="/#new"
        onClick={() => setActive(1)}
        className={`tab text-lg font-bold ${active === 1 && "tab-active"}`}
      >
        ✨ New
      </a>
      <a
        role="tab"
        href="/#top"
        onClick={() => setActive(2)}
        className={`tab text-lg font-bold ${active === 2 && "tab-active"}`}
      >
        🏆 Top
      </a>
    </div>
  );
};

export default Tab;
