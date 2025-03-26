import styled from "styled-components";

export const Container = styled.li`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.radius.sm};
  position: relative; /* ✅ 위로 띄우기 준비 */
  z-index: 0; /* ✅ 기본은 낮게 */
  transform-origin: bottom; /* ✅ 위쪽으로 커지게 */
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: #3a3a3a; /* surface보다 약간 밝은 톤 */
  }
`;

export const SeasonTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const SeasonInfo = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mutedText};
  line-height: 1.5;
`;

export const SeasonImage = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.sm};
  object-fit: cover;
  aspect-ratio: 2 / 3;
`;
