import { useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import { Container, Hidden, Main, Root, Typography } from '../base/atoms';
import Content from '../organisms/Content';
import Header from '../organisms/Header';
import Navigator from '../organisms/Navigator';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 256;

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    footer: {
      padding: theme.spacing(2),
      background: '#eaeff1',
    },
  });

export interface PaperbaseProps extends WithStyles<typeof styles> {}

function Paperbase(props: PaperbaseProps) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Root>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator PaperProps={{ style: { width: drawerWidth } }} />
        </Hidden>
      </nav>
      <Container>
        <Header onDrawerToggle={handleDrawerToggle} />
        <Main>
          <Content />
        </Main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </Container>
    </Root>
  );
}

export default withStyles(styles)(Paperbase);
