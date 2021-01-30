import styled from '@emotion/styled';

export const Nav = styled.nav<{ width: number }>(({ width }) => ({
  flexShrink: 0,
  width,
}));
