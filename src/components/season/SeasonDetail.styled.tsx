import styled from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.xl} ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing.lg};
  }
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: ${theme.borderRadius.medium};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 250px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    width: 200px;
  }
`;

export const Info = styled.div`
  flex: 1;

  h2 {
    font-size: ${theme.fontSize.xxl};
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: ${theme.spacing.md};

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fontSize.xl};
      text-align: center;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSize.lg};
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

export const Meta = styled.p`
  font-size: ${theme.fontSize.md};
  margin-bottom: ${theme.spacing.sm};

  strong {
    color: ${theme.colors.text.secondary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;

export const FullContainer = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

export const SectionTitle = styled.h3`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background-color: ${theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.lg};
  }
`;

export const Overview = styled.p`
  font-size: ${theme.fontSize.md};
  line-height: 1.7;
  color: ${theme.colors.text.secondary};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
    line-height: 1.6;
  }
`;

export const BtnWrap = styled.div`
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    margin-top: ${theme.spacing.lg};
  }
`;

export const BackButton = styled.button`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: transparent;
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.small};
  font-size: ${theme.fontSize.md};
  cursor: pointer;
  transition: ${theme.transition.default};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: ${theme.colors.text.secondary};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;
