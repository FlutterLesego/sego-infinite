import styled from "styled-components";

const DefaultButton = styled.button`
  height: 4.4rem;
  border: none;
  padding: ${({ theme }) => theme.padding.xs};
  background-color: ${({ theme, $popular }) =>
    $popular ? theme.colors.secondary : theme.colors.primaryDark};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 1.48rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryDark};
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  }
`;

const OutlinedButton = styled.button`
  height: 4.4rem;
  font-size: 1.48rem;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.padding.xs};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  transition: all 0.4s ease-in-out;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, $popular }) =>
      $popular ? theme.colors.secondaryDark : theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const TextButton = styled.button`
  height: 4.4rem;
  font-size: 1.48rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.1s ease-in-out;
  border: 1px solid transparent;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryDark};
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.light};
  }
`;

function Button({ text, outline, children, ...rest }) {
  if (!outline && !text) {
    return <DefaultButton {...rest}>{children}</DefaultButton>;
  } else if (!text) {
    return <OutlinedButton {...rest}>{children}</OutlinedButton>;
  } else {
    return <TextButton {...rest}>{children}</TextButton>;
  }
}

export { Button };
