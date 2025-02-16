import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ErrorMessage = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <Container
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <Icon>⚠️</Icon>
          <Message>{message}</Message>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Container>
      )}
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  background: #FEE2E2;
  border: 1px solid #FCA5A5;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Icon = styled.span`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

const Message = styled.p`
  color: #991B1B;
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #991B1B;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 ${({ theme }) => theme.spacing.xs};
`;

export default ErrorMessage; 