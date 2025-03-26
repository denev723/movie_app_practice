import axios from "axios";
import {
  MediaType,
  MovieProps,
  SeasonDetailInfo,
  TVProps,
  VideoInfo,
  WatchProvider,
  WatchProviderResponse,
} from "../types/app";
import { API_OPTIONS, API_URL, DEFAULT_QUERY } from "./config";

type MediaDetail<T extends MediaType> = T extends "movie" ? MovieProps : TVProps;

export async function getMediaDetail<T extends MediaType>(type: T, id: string): Promise<MediaDetail<T>> {
  const res = await axios.get<MediaDetail<T>>(`${API_URL}/${type}/${id}?${DEFAULT_QUERY}`, API_OPTIONS);
  return res.data as MediaDetail<T>;
}

export async function getWatchProvider<T extends MediaType>(type: T, id: string): Promise<WatchProvider[]> {
  try {
    const res = await axios.get<WatchProviderResponse>(`${API_URL}/${type}/${id}/watch/providers`, { ...API_OPTIONS });
    const raw = res.data?.results?.KR?.flatrate ?? [];

    const filtered = raw.filter(
      (provider, idx, self) =>
        provider.provider_name !== "Netflix basic with Ads" &&
        self.findIndex((p) => p.provider_id === provider.provider_id) === idx
    );
    return filtered;
  } catch (error) {
    console.error("OTT 정보 불러오기 실패", error);
    return [];
  }
}

export async function getMovieTrailer(id: string): Promise<VideoInfo[] | null> {
  try {
    const resKr = await axios.get<{ results: VideoInfo[] }>(
      `${API_URL}/movie/${id}/videos?${DEFAULT_QUERY}`,
      API_OPTIONS
    );
    let videos = resKr.data.results;

    if (videos.length === 0) {
      const resEn = await axios.get<{ results: VideoInfo[] }>(
        `${API_URL}/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      videos = resEn.data.results;
    }

    const trailer = videos.filter((video) => video.site === "YouTube" && video.type === "Trailer");

    return trailer ?? null;
  } catch (error) {
    console.error("트레일러 정보 불러오기 실패", error);
    return null;
  }
}

export async function getSeasonDetail(tvId: string, seasonNumber: string): Promise<SeasonDetailInfo | null> {
  try {
    const res = await axios.get<SeasonDetailInfo>(
      `${API_URL}/tv/${tvId}/season/${seasonNumber}?${DEFAULT_QUERY}`,
      API_OPTIONS
    );
    return res.data;
  } catch (error) {
    console.error("시즌 정보 불러오기 실패", error);
    return null;
  }
}
