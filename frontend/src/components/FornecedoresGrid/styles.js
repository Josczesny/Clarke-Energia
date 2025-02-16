export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  min-height: 200px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin: 0 auto 0.5rem;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    margin: 0.5rem 0;
    text-align: center;
  }

  .info {
    margin-top: auto;
    padding-top: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    
    span {
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
`; 