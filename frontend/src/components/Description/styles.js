import Image from "./assets/Item.svg";

export const styles = {
  itemHeader: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 110%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "1768px", 
    height: "1020px"
  },
  armorLeft: {
    position: "absolute",
    left: "36.5%",
    top: "24%",
  },
  lineLeft: {
    position: "absolute",
    left: "34.5%",
    top: "26.5%",
  },
  armorRight: {
    position: "absolute",
    left: "54%",
    top: "13%",
  },
  lineRight: {
    position: "absolute",
    left: "60.5%",
    top: "15.5%",
  },
  armorDown: {
    position: "absolute",
    left: "80%",
    top: "31%",
  },
  lineDown: {
    position: "absolute",
    left: "85%",
    top: "34%",
  },
  item: {
    paddingBottom: "10%",
    paddingLeft: "10%",
  },
};
