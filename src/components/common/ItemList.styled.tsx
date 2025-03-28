import styled from "styled-components";
import theme from "../../styles/theme";

export const SectionTitle = styled.h2`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.primary};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 1.8em; /* 약 두 글자 너비로 변경 */
    height: 4px;
    background-color: ${theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSize.xl};
    margin-bottom: ${theme.spacing.lg};

    &::after {
      width: 1.8em; /* 비율 유지 */
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.lg};
    margin-bottom: ${theme.spacing.lg};

    &::after {
      width: 1.8em; /* 비율 유지 */
      height: 3px;
      bottom: -8px;
    }
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: ${theme.spacing.xxl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing.xl};
  }
`;
