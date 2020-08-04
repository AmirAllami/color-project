import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

import "./Styles/Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(newLevel) {
    console.log(newLevel);
    this.setState({
      level: newLevel,
    });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const L = this.state.level;
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this.props.palette.colors[L].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        colorId={color.id}
        paletteId={id}
        showLink={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={L}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
