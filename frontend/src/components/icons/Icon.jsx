import React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  
  // Para ícones que precisam de preenchimento
  &.fill {
    fill: currentColor;
    stroke: none;
  }
`;

export const Icon = ({ children, size = 24, className, ...props }) => (
  <StyledSvg
    viewBox="0 0 24 24"
    size={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </StyledSvg>
); 