import React from 'react';
import styled from 'styled-components';

export const Logo = () => (
  <Container>
    <LogoImage>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path 
          d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 7c7.18 0 13 5.82 13 13s-5.82 13-13 13S7 27.18 7 20 12.82 7 20 7z"
          fill="currentColor"
        />
        <path 
          d="M20 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 4c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"
          fill="currentColor"
          fillOpacity="0.6"
        />
      </svg>
    </LogoImage>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.div`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
`; 