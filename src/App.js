import React, { Component } from "react";
import Palette from "./componants/Palette";
import PaletteList from "./componants/PaletteList";
import SingleColorPalette from "./componants/SingleColorPalette";

import SeedColors from "./SeedColors";
import { Route, Switch } from "react-router-dom";

import { generatePalette } from "./ColorHelper";

import "./App.css";

class App extends Component {
  findPalette(id) {
    return SeedColors.find(function (pallette) {
      return pallette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={SeedColors} {...routeProps} />
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
