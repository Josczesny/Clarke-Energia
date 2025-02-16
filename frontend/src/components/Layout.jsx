import React, { useState } from 'react';
import styled from 'styled-components';
import SidePanel from './SidePanel';
import Header from './Header';

const Layout = ({ children }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <Container>
      <SidePanel isOpen={isPanelOpen} onToggle={() => setIsPanelOpen(!isPanelOpen)} />
      <MainArea>
        <Header />
        <Content>
          {children}
        </Content>
      </MainArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainArea = styled.main`
  flex: 1;
  min-width: 0;
  background: ${({ theme }) => theme.colors.background.main};
`;

const Content = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const BuscaGrid = styled.div`
  display: grid;
  grid-template-columns: 300px repeat(3, 200px) 120px;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    > *:nth-child(1) {
      grid-column: span 3;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    
    > * {
      grid-column: 1;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding-bottom: 2px;
`;

export const ConsumoRange = styled.div`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  grid-column: 1;
`;

export const FiltrosAvancados = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default Layout; 