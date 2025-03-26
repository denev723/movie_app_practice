import { useParams } from "react-router";
import Loading from "../components/common/Loading";
import { useMediaDetail } from "../hooks/useMediaDetail";
import DetailLayout from "../components/detail/DetailLayout";
import { HelmetMeta } from "../lib/helmet";

interface Props {
  mediaType: "movie" | "tv";
}

export default function DetailPage({ mediaType }: Props) {
  const { id } = useParams<{ id: string }>();
  const { isLoading, item, providers, trailers } = useMediaDetail(id!, mediaType);

  if (isLoading) {
    return <Loading />;
  }

  if (!item) return null;
  const title = "title" in item ? item.title : item.name;

  return (
    <>
      <HelmetMeta title={title} description={item.overview} />
      <DetailLayout item={item} providers={providers} trailers={trailers} mediaType={mediaType} />
    </>
  );
}
