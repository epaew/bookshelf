import { Grid, GridProps } from '@material-ui/core';
import { FC } from 'react';

interface GridContainerProps extends Omit<GridProps, 'container' | 'item'> {}

export const GridContainer: FC<GridContainerProps> = props => <Grid container alignItems="center" {...props} />;
