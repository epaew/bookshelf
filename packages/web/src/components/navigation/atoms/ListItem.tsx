import styled from '@emotion/styled';
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from '@material-ui/core';
import { FC } from 'react';

import { marginAcceptable } from '../../../utils';

interface ListItemProps extends MuiListItemProps {
  active?: boolean;
}

const BaseListItem = marginAcceptable(MuiListItem);
const BaseStyle = {
  paddingBottom: 1,
  paddingTop: 1,
  '&:hover,&:focus': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
};

const ActiveListItem = styled(BaseListItem)({
  ...BaseStyle,
  color: '#4fc3f7',
});
const InactiveListItem = styled(BaseListItem)({
  ...BaseStyle,
  color: 'rgba(255, 255, 255, 0.7)',
});

export const ListItem: FC<ListItemProps> = ({ active, ...rest }) => {
  // TODO: remove `as any`
  if (active) return <ActiveListItem {...(rest as any)} />;
  return <InactiveListItem {...(rest as any)} />;
};
