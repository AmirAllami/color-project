import React, { Component } from "react";
import Palette from "./componants/Palette";
import PaletteList from "./componants/PaletteList";
import SingleColorPalette from "./componants/SingleColorPalette";
import NewPaleteForm from "./componants/NewPaleteForm";

import SeedColors from "./SeedColors";
import { Route, Switch } from "react-router-dom";

import { generatePalette } from "./ColorHelper";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: SeedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (pallette) {
      return pallette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState({
      palettes: [...this.state.palettes, newPalette],
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaleteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
      //<div className="App">

      // <Palette palette={generatePalette(SeedColors[5])} />
      // </div>
    );
  }
}

export default App;
