import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MoonIcon } from './icons';

const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <ToggleButton
      onClick={onToggle}
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
      whileTap={{ scale: 0.95 }}
    >
      <MoonIcon size={20} />
    </ToggleButton>
  );
};

const ToggleButton = styled(motion.button)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.inverse};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.hover};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    font-size: 1.5rem;
  }
`;

export default ThemeToggle; 