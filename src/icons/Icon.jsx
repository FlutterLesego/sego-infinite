import styled from "styled-components";
import * as Icons from ".";

const IconWrapper = styled.span`
  height: ${({ $size }) => $size || "2.4rem"};
  width: ${({ $size }) => $size || "2.4rem"};
  cursor: pointer;

  & > svg {
    height: ${({ $size }) => $size || "2.4rem"};
    width: ${({ $size }) => $size || "2.4rem"};
  }

  & > svg > path {
    fill: ${({ theme, $color }) => $color || theme.colors.grey[700]};
  }
`;

export const Icon = ({ name, size, color, fill, ...rest }) => {
  name = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const IconComponent = Icons[name];

  return (
    <IconWrapper $color={color} $size={size} $fill={fill} {...rest}>
      <IconComponent />
    </IconWrapper>
  );
};
