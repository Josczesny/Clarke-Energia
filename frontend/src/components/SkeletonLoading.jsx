import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.background.alt} 0px,
    ${({ theme }) => theme.colors.background.main} 50%,
    ${({ theme }) => theme.colors.background.alt} 100%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const SkeletonCard = styled(SkeletonBase)`
  width: 100%;
  height: 400px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-rows: 120px 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &::before {
    content: "";
    display: block;
    width: 60%;
    height: 24px;
    background: inherit;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 16px;
    background: inherit;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`; 