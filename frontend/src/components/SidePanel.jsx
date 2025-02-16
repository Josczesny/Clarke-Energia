import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Icon } from './icons/Icon';
import { EmojiIcon } from './icons/EmojiIcon';

const SidePanel = ({ isOpen, togglePanel }) => {
  const location = useLocation();
  const theme = useTheme();
  const isDarkTheme = theme.type === 'dark';

  const modules = [
    {
      id: 'dashboard',
      icon: '📊',
      label: 'Dashboard',
      path: '/',
      description: 'Visão geral'
    },
    {
      id: 'clients',
      icon: '👥',
      label: 'Clientes',
      path: '/clients',
      description: 'Gerenciar clientes'
    },
    {
      id: 'proposals',
      icon: '📝',
      label: 'Propostas',
      path: '/proposals',
      description: 'Contratos e propostas'
    },
    {
      id: 'calculator',
      icon: '🔢',
      label: 'Calculadora',
      path: '/calculator',
      description: 'Simulador de economia'
    },
    {
      id: 'reports',
      icon: '📈',
      label: 'Relatórios',
      path: '/reports',
      description: 'Análises e métricas'
    }
  ];

  return (
    <Panel
      initial={{ width: isOpen ? '200px' : '56px' }}
      animate={{ width: isOpen ? '200px' : '56px' }}
      transition={{ duration: 0.2 }}
    >
      <LogoContainer onClick={togglePanel}>
        <LogoIcon 
          src={`/clarke-icon${isDarkTheme ? '-white' : ''}.svg`}
          alt="Clarke" 
        />
      </LogoContainer>

      <ModuleList>
        {modules.map(module => (
          <ModuleItem 
            key={module.id}
            to={module.path}
            $isActive={location.pathname === module.path}
          >
            <ModuleIcon>
              <EmojiIcon>{module.icon}</EmojiIcon>
            </ModuleIcon>
            <ModuleContent $isOpen={isOpen}>
              <ModuleLabel>{module.label}</ModuleLabel>
              <ModuleDescription>{module.description}</ModuleDescription>
            </ModuleContent>
          </ModuleItem>
        ))}
      </ModuleList>
    </Panel>
  );
};

const Panel = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: ${({ theme }) => 
    theme.type === 'dark' 
      ? theme.colors.primary.darkPanel
      : theme.colors.primary.darker
  };
  display: flex;
  flex-direction: column;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const LogoContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Logo = styled.img`
  height: 24px;
  width: auto;
`;

const LogoIcon = styled.img`
  height: 24px;
  width: 24px;
`;

const ModuleList = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
`;

const ModuleItem = styled(Link)`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  text-decoration: none;
  background: ${({ $isActive }) =>
    $isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border-left: 3px solid ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accent : 'transparent'};
  gap: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ModuleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all 0.2s ease;
`;

const ModuleIcon = styled.span`
  min-width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: 1.25rem;
`;

const ModuleLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.text.inverse};
`;

const ModuleDescription = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.inverse}80;
  margin-top: 0.25rem;
`;

export default SidePanel; 