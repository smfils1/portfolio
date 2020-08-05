import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { Drawer, useMediaQuery } from "@material-ui/core";
import MainNavMenu from "./MainNavMenu";
import StartNav from "../TopNav/StartNav";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  drawer: {
    backgroundColor: "black",
    color: "white",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create(["width", "margin", "visibility"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
  },
  navHead: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const SideNav = () => {
  const theme = useTheme();
  const isMaxScreenSm = useMediaQuery(theme.breakpoints.down("sm"));

  const isDrawerOpen = useSelector(({ layout }) => layout.isDrawerOpen);
  let isOpen;
  if (isMaxScreenSm) isOpen = isDrawerOpen;
  else isOpen = true; //We will control open by css
  const classes = useStyles();
  return (
    <Drawer
      variant={isMaxScreenSm ? "temporary" : "persistent"}
      open={isOpen}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <div className={classes.navHead}>{isMaxScreenSm && <StartNav />}</div>
      <MainNavMenu />
    </Drawer>
  );
};

export default SideNav;
