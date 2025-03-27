import { useEffect, useState } from "react";
import { SeasonDetailInfo } from "../types/media";
import { getMediaDetail, getSeasonDetail } from "../api/detail";

export function useSeasonDetail(tvId: string, seasonNumber: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<SeasonDetailInfo | null>(null);
  const [name, setName] = useState<string | null>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!tvId || !seasonNumber) return;
        setIsLoading(true);
        const { name } = await getMediaDetail("tv", tvId);
        const data = await getSeasonDetail(tvId, seasonNumber);

        setData(data);
        setName(name);
      } catch (error) {
        console.error("시즌 정보 불러오기 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tvId, seasonNumber]);

  return { isLoading, data, name };
}
