const FormInput = ({ 
  label, 
  helpText, 
  error, 
  required, 
  loading,
  ...props 
}) => {
  return (
    <InputWrapper>
      <InputLabel>
        {label}
        {required && <RequiredMark>*</RequiredMark>}
        {loading && <LoadingIndicator />}
      </InputLabel>
      
      <StyledInput
        error={!!error}
        disabled={loading}
        {...props}
      />
      
      {helpText && <HelpText>{helpText}</HelpText>}
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

const StyledInput = styled.input`
  height: 38px;
  padding: 0 1rem;
  width: 340px;
  border: 1px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.border};
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}40;
  }
`; 