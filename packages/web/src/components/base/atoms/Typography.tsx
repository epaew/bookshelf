import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@material-ui/core';
import { ElementType, FC } from 'react';

import { marginAcceptable } from '../../../utils';

interface TypographyProps extends MuiTypographyProps {
  component?: ElementType;
}

export const Typography: FC<TypographyProps> = marginAcceptable(MuiTypography);
