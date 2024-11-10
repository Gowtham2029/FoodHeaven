import { useId } from "react";
const SliderShimmer = () => {

  return (
    <div style={{display:"flex"}}>
      {Array(4)
        .fill("")
        .map((e, idx) => (
          <div style={{width:"90%", height:"5rem"}} key={idx}></div>
        ))}
    </div>
  );
};

export default SliderShimmer;