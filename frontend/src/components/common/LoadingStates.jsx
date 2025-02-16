export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const LoadingSpinner = styled.div`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
`;

export const FeedbackMessage = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
  background: ${({ type, theme }) => {
    switch(type) {
      case 'error': return theme.colors.error.light;
      case 'success': return theme.colors.success.light;
      default: return theme.colors.info.light;
    }
  }};
  color: ${({ type, theme }) => theme.colors[type].dark};
`; 