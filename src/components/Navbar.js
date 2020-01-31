import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 3,
    display: 'center'
  },
  typography: {
    flexGrow: 1,
    align: 'center'
  },

  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'lightcyan'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default function ButtonAppBar(side) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.typography}>
            <Link className="Link" to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h4" className={classes.typography}>
            My Reading List
          </Typography>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Link" to="/bookshelf">
              Bookshelf
            </Link>
          </li>
          <li>
            <Link className="Link" to="/search">
              Search Book
            </Link>
          </li>
          <li>
            <Link className="Link" to="/reviews">
              {' '}
              Reviews
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
