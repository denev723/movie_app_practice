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

export const TrailerWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.md};
  }
`;

export const TrailerItem = styled.li`
  width: 100%;
  border-radius: ${theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: ${theme.spacing.md};

  iframe {
    aspect-ratio: 16/9;
    width: 100%;
    border: none;
  }
`;
