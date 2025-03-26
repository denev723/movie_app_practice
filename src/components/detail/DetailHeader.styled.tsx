import styled from "styled-components";

export const FlexBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Poster = styled.img`
  width: 240px;
  aspect-ratio: 2 / 3;
  border-radius: ${({ theme }) => theme.radius.base};
  object-fit: cover;
`;

export const Info = styled.div`
  flex: 1;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin-bottom: ${({ theme }) => theme.spacing.base}; // ✅ 제목과 메타 간 여백 추가
  }
`;

export const Meta = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.sm}; // spacing.xs → sm
  line-height: 1.6; // 더 넉넉하게
`;
