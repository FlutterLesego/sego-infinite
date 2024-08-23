import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 1.28rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  font-family: inherit;
  padding: ${({ theme }) => theme.padding.md};
  background-color: rgb(244, 246, 248);
  resize: none;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid transparent;
  height: 12rem;
  outline: none;
  transition: ${({ theme }) => theme.transitions.easeInOut};
  font-size: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:focus {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(244, 246, 248);
  }
`;

export function TextArea({ label, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledTextArea {...rest} />
    </Container>
  );
}
