import { useId } from "react";
const SliderShimmer = () => {
  const id = useId();
  return (
    <div style={{display:"flex"}}>
      {Array(4)
        .fill("")
        .map((e) => (
          <div style={{width:"90%", height:"5rem"}} key={id}></div>
        ))}
    </div>
  );
};

export default SliderShimmer;