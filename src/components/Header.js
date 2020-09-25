import React from "react";
import SignOut from "./SignOut";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className="stickToTop">
      <Toolbar>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Chat-React
        </Typography>
        <SignOut />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
