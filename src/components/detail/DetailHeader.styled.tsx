import styled from "styled-components";
import theme from "../../styles/theme";

export const FlexBox = styled.div`
  display: flex;
  gap: ${theme.spacing.xl};

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
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  h2 {
    font-size: ${theme.fontSize.xxxl};
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: ${theme.spacing.md};
    line-height: 1.2;

    @media (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fontSize.xxl};
      text-align: center;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSize.xl};
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    align-items: center;
    text-align: center;
  }
`;

export const Meta = styled.div`
  font-size: ${theme.fontSize.md};
  line-height: 1.5;
  margin-bottom: ${theme.spacing.xs};

  strong {
    color: ${theme.colors.text.secondary};
    margin-right: ${theme.spacing.xs};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.fontSize.sm};
  }
`;
