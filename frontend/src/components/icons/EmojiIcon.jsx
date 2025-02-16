import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const EmojiIcon = ({ children }) => (
  <IconWrapper>{children}</IconWrapper>
); 