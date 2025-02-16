import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 2rem;
  background: ${({ theme }) => 
    theme.type === 'dark'
      ? theme.colors.primary.dark
      : theme.colors.primary.main
  };
  color: ${({ theme }) => theme.colors.text.inverse};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 42px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${({ theme }) => 
      theme.type === 'dark'
        ? theme.colors.primary.darker
        : theme.colors.primary.dark
    };
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`; 