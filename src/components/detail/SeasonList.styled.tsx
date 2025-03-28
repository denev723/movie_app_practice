import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: ${theme.spacing.xxl} auto ${theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
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

export const SeasonWrap = styled.ul`
  display: flex;
  gap: ${theme.spacing.md};
  overflow-x: auto;
  overflow-y: visible;
  margin: 0 -${theme.spacing.md};
  padding: ${theme.spacing.md} ${theme.spacing.md} ${theme.spacing.xl};

  /* 스크롤바 숨기기 */
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    gap: ${theme.spacing.sm};
    margin: 0 -${theme.spacing.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.lg};
  }
`;
