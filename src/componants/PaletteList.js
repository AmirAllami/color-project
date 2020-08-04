import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import MiniPalette from "./MiniPalette";

const Style = {
  root: {
    backgroundColor: "darkblue",
    height: "100vh",
    display: "flex",
    alignItem: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white",
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};
class PaletteList extends Component {
  goToPallete(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color APP</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((p) => (
              <div>
                <MiniPalette
                  {...p}
                  handleClick={() => this.goToPallete(p.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(Style)(PaletteList);
