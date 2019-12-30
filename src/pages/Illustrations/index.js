import React from "react";
import useIllustration from "hooks/useIllustration";

const Illustrations = () => {
  const [title, path, next, previous] = useIllustration();
  return (
    <div>
      <button onClick={previous}>previous</button>
      <img src={path} alt={title}></img>
      <button onClick={next}>next</button>
    </div>
  );
};

export default Illustrations;
