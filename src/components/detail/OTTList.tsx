import { WatchProvider } from "../../types/media";
import { makeImagePath } from "../../utils/imagePath";
import { SectionTitle, Providers } from "./OTTList.styled";

interface Props {
  providers: WatchProvider[];
}

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
