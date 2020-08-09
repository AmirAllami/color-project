import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import Dialog from "@material-ui/core/Dialog";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import Avatar from "@material-ui/core/Avatar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Style from "./Styles/PaletteListStyles";

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletedId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleConformDelete = this.handleConformDelete.bind(this);
  }
  openDialog(id) {
    this.setState({ openDeleteDialog: true });
    this.setState({ deletedId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletedId: "" });
  }
  goToPallete(id) {
    this.props.history.push(`/palette/${id}`);
  }
  handleConformDelete() {
    this.props.deletePalette(this.state.deletedId);
    this.closeDialog();
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.title}>Color APP</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((p) => (
              <CSSTransition key={p.id} classNames="fade" timeout={500}>
                <MiniPalette
                  key={p.id}
                  {...p}
                  handleClick={() => this.goToPallete(p.id)}
                  //handleRemove={this.props.deletePalette}
                  openDialog={this.openDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="Delete-Dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="Delete-Dialog-title">
            Delete this palette
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleConformDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="close" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(Style)(PaletteList);
