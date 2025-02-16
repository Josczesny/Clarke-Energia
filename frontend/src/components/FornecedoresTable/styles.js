export const TableContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    th {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      text-align: left;
      background: ${({ theme }) => theme.colors.background.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border};
      white-space: nowrap;
    }

    td {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      white-space: nowrap;
    }

    th:nth-child(1), td:nth-child(1) { width: 30%; }
    th:nth-child(2), td:nth-child(2) { width: 15%; }
    th:nth-child(3), td:nth-child(3) { width: 15%; }
    th:nth-child(4), td:nth-child(4) { width: 20%; }
    th:nth-child(5), td:nth-child(5) { width: 20%; }

    tr:hover td {
      background: ${({ theme }) => theme.colors.background.hover};
    }
  }
`; 