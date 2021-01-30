import styled from '@emotion/styled';
import { FC } from 'react';

import { Typography } from '../../base/atoms';
import { ListItem } from '../atoms';

interface AppTitleProps {
  title: string;
}

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  backgroundColor: '#232f3e',
  boxShadow: '0 -1px 0 #404854 inset',
  color: theme.palette.common.white,
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(2),
}));

export const AppTitle: FC<AppTitleProps> = ({ title }) => (
  <StyledListItem>
    <Typography variant="h4">{title}</Typography>
  </StyledListItem>
);
