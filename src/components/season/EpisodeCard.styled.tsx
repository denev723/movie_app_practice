import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.base};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Thumbnail = styled.img`
  width: 180px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: #222;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Meta = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.subtext};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Overview = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
