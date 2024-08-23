import { useState } from "react";
import styled from "styled-components";

// Icons
import { Eye, EyeSlash } from "@/icons";

const InputContainer = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 1.28rem;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StyledInput = styled.input`
  height: 4.4rem;
  width: 100%;
  padding: ${({ theme }) => theme.padding.md};
  background-color: rgb(244, 246, 248);
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radius.md};
  outline: none;
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.4rem;
  transition: ${({ theme }) => theme.transitions.easeInOut};

  &::placeholder {
    color: ${({ theme }) => theme.colors.light};
  }

  &:focus {
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(244, 246, 248);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-0.14rem);
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.light};
  }
`;

const Error = styled.p`
  position: absolute;
  bottom: -1.6rem;
  right: 1.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};
`;

export function Input({ type, label, error, ...rest }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <StyledInput
        type={type === "password" && showPassword ? "text" : type}
        {...rest}
      />
      {type === "password" && (
        <IconContainer onClick={handleShowPassword}>
          {!showPassword ? <EyeSlash /> : <Eye />}
        </IconContainer>
      )}
      <Error>{error}</Error>
    </InputContainer>
  );
}
