import { useId } from "react";

const Shimmer = () => {

  return (
    <div className="Restaurant-list">
      {Array(20)
        .fill("")
        .map((e, idx) => (
          <div className="shimmer-card" key={idx}></div>
        ))}
    </div>
  );
};

export default Shimmer;
