import React from 'react';
import styled from 'styled-components';

const ViewModeButtons = ({ viewMode, onViewChange }) => {
  return (
    <ViewControls>
      <ViewButton 
        onClick={() => onViewChange('list')}
        $active={viewMode === 'list'}
      >
        <IconWrapper>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </IconWrapper>
        <span>Lista</span>
      </ViewButton>
      <ViewButton 
        onClick={() => onViewChange('grid')}
        $active={viewMode === 'grid'}
      >
        <IconWrapper>
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
          </svg>
        </IconWrapper>
        <span>Grid</span>
      </ViewButton>
    </ViewControls>
  );
};

const ViewControls = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary.main : theme.colors.background.card};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.primary.dark : theme.colors.background.hover};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
`;

export default ViewModeButtons; 