import { Grid, GridProps } from '@material-ui/core';
import { FC } from 'react';

interface GridItemProps extends Omit<GridProps, 'container' | 'item' | 'spacing'> {}

export const GridItem: FC<GridItemProps> = props => <Grid item {...props} />;
