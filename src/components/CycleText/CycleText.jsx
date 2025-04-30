import { useEffect, useState } from "react";

import "./CycleText.css";
import "../Home/Home.css";
import { jobDescriptions } from "../../utils/constants";

function CycleText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % jobDescriptions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="cycle-text">
      {" "}
      <p className="home__description">{jobDescriptions[index]}</p>
    </div>
  );
}
export default CycleText;
