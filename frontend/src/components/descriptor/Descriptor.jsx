import React from "react";
import PlusSign from "./assets/PlusSign.svg";

const Descriptor = ({ plusPos, lineSrc, linePos, styles ,title}) => {
  return (
    <>
      <img src={PlusSign} alt="PlusSign" style={plusPos} />
      <img src={lineSrc} alt="PlusSign" style={linePos} />
      <h5 className={styles}>{title}</h5>
    </>
  );
};

export default Descriptor;
