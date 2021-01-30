import { FC } from 'react';

import { ListItem, ListItemIcon, ListItemText } from '../atoms';

interface NavigationMenuItemProps {
  active?: boolean;
  icon?: Element;
  text: string;
}

export const NavigationMenuItem: FC<NavigationMenuItemProps> = ({ active, icon, text }) => (
  <ListItem active={active}>
    {icon && <ListItemIcon>{icon}</ListItemIcon>}
    <ListItemText>{text}</ListItemText>
  </ListItem>
);
