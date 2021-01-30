import styled, { StyledOptions } from '@emotion/styled';
import { ComponentProps, ComponentType } from 'react';

type MarginValue = number | string | undefined;

interface Margin {
  margin?:
    | MarginValue
    | {
        bottom?: MarginValue;
        left?: MarginValue;
        right?: MarginValue;
        top?: MarginValue;
        x?: MarginValue;
        y?: MarginValue;
      };
}

export const marginAcceptable = <C extends ComponentType<ComponentProps<C>>>(
  component: C,
  options?: StyledOptions<ComponentProps<C>>,
) =>
  styled(
    component,
    options,
  )<Margin>(({ margin, theme }) => {
    const computeMarginValue = (value: MarginValue) => {
      switch (typeof value) {
        case 'number':
          return theme.spacing(value);
        default:
          return value;
      }
    };

    switch (typeof margin) {
      case 'number':
      case 'string':
        return { margin: computeMarginValue(margin) };
      case 'object':
        const { x, y, bottom = y, left = x, right = x, top = y } = margin;

        return {
          marginBottom: computeMarginValue(bottom),
          marginLeft: computeMarginValue(left),
          marginRight: computeMarginValue(right),
          marginTop: computeMarginValue(top),
        };
      default:
        return {};
    }
  });
