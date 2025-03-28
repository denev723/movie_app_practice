import styled from "styled-components";
import theme from "../../styles/theme";

export const SectionWrapper = styled.section`
  margin-bottom: ${theme.spacing.xxl};
  width: 100%;

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

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
      width: 1.8; /* 비율 유지 */
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

export const ItemList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: ${theme.spacing.xs};
  }
`;
