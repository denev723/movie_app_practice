import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  margin-top: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.text.primary};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 1.8em; /* 약 두 글자 너비로 변경 */
    height: 3px;
    background-color: ${theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.spacing.md};

    &::after {
      width: 1.8em; /* 비율 유지 */
    }
  }
`;

export const Overview = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: 1.7;
  color: ${theme.colors.text.secondary};
  max-width: 800px;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
    line-height: 1.6;
  }
`;
