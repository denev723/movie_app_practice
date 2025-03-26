import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SeasonWrap = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: ${({ theme }) => theme.spacing.base};
  list-style: none;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  margin: 0;

  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }
`;
