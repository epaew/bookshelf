import styled from '@emotion/styled';
import { Drawer as MuiDrawer, DrawerProps as MuiDrawerProps } from '@material-ui/core';
import { FC } from 'react';

import { List } from '../atoms';

interface DrawerProps extends Omit<MuiDrawerProps, 'PaperProps'> {
  width: number;
}

const StyledDrawer = styled(MuiDrawer)<{ width: number }>(({ theme, width }) => ({
  [theme.breakpoints.up('sm')]: {
    flexShrink: 0,
    width,
  },
}));

export const Drawer: FC<DrawerProps> = ({ children, variant = 'permanent', width, ...props }) => {
  const PaperProps = {
    style: {
      backgroundColor: '#18202c',
      width,
    },
  };

  return (
    <StyledDrawer PaperProps={PaperProps} variant={variant} width={width} {...props}>
      <List disablePadding>{children}</List>
    </StyledDrawer>
  );
};
