import { useEffect, useState } from "react";
import { MovieProps, TVProps, VideoInfo, WatchProvider } from "../types/media";
import { getMediaDetail, getMovieTrailer, getWatchProvider } from "../api/detail";

export function useMediaDetail(id: string, mediaType: "movie" | "tv") {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState<MovieProps | TVProps | null>(null);
  const [providers, setProviders] = useState<WatchProvider[]>([]);
  const [trailers, setTrailers] = useState<VideoInfo[]>([]);

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const detail = await getMediaDetail(mediaType, id);
        const otts = await getWatchProvider(mediaType, id);

        if (mediaType === "movie") {
          const videos = await getMovieTrailer(id);
          if (videos) {
            setTrailers(videos);
          }
        }

        setItem(detail);
        setProviders(otts);
      } catch (error) {
        console.error("상세 정보 불러오기 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, mediaType]);

  return { isLoading, item, providers, trailers };
}
