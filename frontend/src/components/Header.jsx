import React from 'react';
import styled from 'styled-components';
import { Logo } from './Logo';

const Header = () => (
  <Container>
    <LogoContainer>
      <Logo />
      <CompanyInfo>
        <CompanyName>Clarke Energy</CompanyName>
        <Tagline>
          Transformando o futuro com energia sustentável
          <TaglineHighlight>Economia e sustentabilidade para sua empresa</TaglineHighlight>
        </Tagline>
      </CompanyInfo>
    </LogoContainer>
  </Container>
);

const Container = styled.header`
  padding: 1.5rem 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CompanyName = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0;
  letter-spacing: -0.5px;
`;

const Tagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const TaglineHighlight = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default Header; 