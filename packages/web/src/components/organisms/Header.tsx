import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import { GridContainer, GridItem, Hidden, Typography } from '../base/atoms';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;
}

function Header(props: HeaderProps) {
  const { classes, onDrawerToggle } = props;

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <GridContainer spacing={1}>
            <Hidden smUp>
              <GridItem>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </GridItem>
            </Hidden>
            <GridItem xs />
            <GridItem>
              <Link className={classes.link} href="#" variant="body2">
                Go to docs
              </Link>
            </GridItem>
            <GridItem>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </GridItem>
            <GridItem>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </GridItem>
          </GridContainer>
        </Toolbar>
      </AppBar>
      <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
        <Toolbar>
          <GridContainer spacing={1}>
            <GridItem xs>
              <Typography color="inherit" variant="h5" component="h1">
                Authentication
              </Typography>
            </GridItem>
            <GridItem>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                Web setup
              </Button>
            </GridItem>
            <GridItem>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </GridItem>
          </GridContainer>
        </Toolbar>
      </AppBar>
      <AppBar component="div" className={classes.secondaryBar} color="primary" position="static" elevation={0}>
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Users" />
          <Tab textColor="inherit" label="Sign-in method" />
          <Tab textColor="inherit" label="Templates" />
          <Tab textColor="inherit" label="Usage" />
        </Tabs>
      </AppBar>
    </>
  );
}

export default withStyles(styles)(Header);
