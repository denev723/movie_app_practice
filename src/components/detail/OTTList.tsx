import styled from "styled-components";
import { WatchProvider } from "../../types/app";
import { makeImagePath } from "../../utils/imagePath";

interface Props {
  providers: WatchProvider[];
}

// styles for OTTList component
const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Providers = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  padding: 0;
`;

export default function OTTList({ providers }: Props) {
  return (
    <>
      <SectionTitle>OTT 정보</SectionTitle>
      <Providers>
        {providers.map((provider) => (
          <li key={provider.provider_id}>
            <img src={makeImagePath(provider.logo_path, "w45")} alt={provider.provider_name} />
          </li>
        ))}
      </Providers>
    </>
  );
}
