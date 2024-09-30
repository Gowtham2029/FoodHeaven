import { useId } from "react";

const Shimmer = () => {
  const id = useId();
  return (
    <div className="Restaurant-list">
      {Array(20)
        .fill("")
        .map((e) => (
          <div className="shimmer-card" key={id}></div>
        ))}
    </div>
  );
};

export default Shimmer;
