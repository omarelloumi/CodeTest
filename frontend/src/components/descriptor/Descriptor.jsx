import React from "react";
import PlusSign from "./assets/PlusSign.svg";

const Descriptor = ({ plusPos, lineSrc, linePos, styles }) => {
  return (
    <>
      <img src={PlusSign} alt="PlusSign" style={plusPos} />
      <img src={lineSrc} alt="PlusSign" style={linePos} />
      <h5 className={styles}>Armor</h5>
    </>
  );
};

export default Descriptor;
