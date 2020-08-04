import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Styles/Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showSlider } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">Color APP</Link>
        </div>
        {showSlider && (
          <div className="slider-container">
            <span className="NL">level :{level}</span>
            <div className="slider">
              <Slider
                onAfterChange={changeLevel}
                defaultValue={level}
                min={100}
                max={900}
                step={100}
              />
            </div>
          </div>
        )}

        <div className="select-container">
          <Select value={this.state.format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #fffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
            <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={this.state.open}
          autoHideDuration={3500}
          onClose={this.handleClose}
          message={<span>format changed to :{format}</span>}
          action={[
            <IconButton
              color="inherit"
              key="close"
              aria-label="closes the button"
            >
              <CloseIcon onClick={this.handleClose} />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}
