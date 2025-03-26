import styled from "styled-components";
import { MovieProps, TVProps } from "../../types/app";

interface Props {
  item: MovieProps | TVProps;
}

// styles for DetailOverview component
const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export default function DetailOverview({ item }: Props) {
  return (
    <Container>
      <SectionTitle>줄거리</SectionTitle>
      {item.overview ? <Overview>{item.overview}</Overview> : <Overview>줄거리 정보가 없습니다.</Overview>}
    </Container>
  );
}
