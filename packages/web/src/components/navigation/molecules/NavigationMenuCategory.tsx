import { FC } from 'react';

import { ListItem, ListItemText } from '../atoms';

export const NavigationMenuCategory: FC = ({ children }) => (
  <ListItem>
    <ListItemText>{children}</ListItemText>
  </ListItem>
);
