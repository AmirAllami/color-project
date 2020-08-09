import sizes from "./sizes";
import bg from "./bg.svg";
const Style = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transitio: "opacity 500ms ease-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center",
    overflow: "auto",
    backgroundColor: "#000022",
    backgroundImage: `url(${bg})`,
  },
  container: {
    width: "50%",
    display: "flex",

    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    [sizes.down("lg")]: {
      width: "80%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("sm")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1rem",
    },
  },
  title: {
    fontSize: "1.5rem",
  },
};
export default Style;
