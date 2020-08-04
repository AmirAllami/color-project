import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import PaletteFooter from "./PaletteFooter";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(p, c) {
    let shades = [];
    let allColors = p.colors;
    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter((color) => color.id === c));
    }
    return shades.slice(1);
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { format } = this.state;

    const colorBoxes = this._shades.map((c) => (
      <ColorBox
        key={c.name}
        background={c[format]}
        name={c.name}
        showlink={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link
              className="back-button"
              to={`/palette/${this.props.palette.id}`}
            >
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}
