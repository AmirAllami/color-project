import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteICon from "@material-ui/icons/Delete";

const Styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    BorderRaduis: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1,
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "100px",
    width: "100%",
    BorderRaduis: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative",
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px",
  },
  delete: {},
  deleteI: {
    color: "white",
    backgroundColor: "red",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0",
    top: "0",
    padding: "10px",
    zIndex: "10",
    opacity: "0",
  },
};

class MiniPalette extends Component {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
  }
  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.props.handleClick}>
        <DeleteICon
          className={classes.deleteI}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.deletePalette}
        />

        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span>{emoji}</span>
        </h5>
      </div>
    );
  }
}
export default withStyles(Styles)(MiniPalette);
