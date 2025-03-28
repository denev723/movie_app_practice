import styled from "styled-components";
import theme from "../../styles/theme";

export const SectionTitle = styled.h4`
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  margin: ${theme.spacing.md} 0 ${theme.spacing.sm};
  color: ${theme.colors.text.secondary};
`;

export const Providers = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};

  li {
    width: 50px;
    height: 50px;
    border-radius: ${theme.borderRadius.small};
    overflow: hidden;
    transition: ${theme.transition.default};

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    li {
      width: 40px;
      height: 40px;
    }
  }
`;
