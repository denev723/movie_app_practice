import { MediaType, MovieProps, TVProps, VideoInfo, WatchProvider } from "../../types/app";
import DetailHeader from "./DetailHeader";
import DetailOverview from "./DetailOverview";
import TrailerList from "./TrailerList";
import SeasonList from "./SeasonList";
import { Wrapper, ContentSection } from "./DetailLayout.styled";

interface Props {
  item: MovieProps | TVProps;
  providers: WatchProvider[];
  trailers: VideoInfo[];
  mediaType: MediaType;
}

export default function DetailLayout({ item, providers, trailers, mediaType }: Props) {
  const seasonList = "seasons" in item ? item.seasons : [];
  return (
    <>
      <Wrapper $backdrop={item.backdrop_path}>
        <DetailHeader item={item} providers={providers} />
        <ContentSection>
          <DetailOverview item={item} />
          {mediaType === "movie" ? <TrailerList trailers={trailers} /> : <SeasonList items={seasonList} />}
        </ContentSection>
      </Wrapper>
    </>
  );
}
