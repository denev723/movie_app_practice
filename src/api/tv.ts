import axios from "axios";
import { ApiResponse, ItemCardProps } from "../types/app";
import { API_OPTIONS, API_URL } from "./config";
import React from "react";

export const fetchTvsByPage = async (
  type: "popular" | "top_rated" | "on_the_air",
  page: number
): Promise<ApiResponse<ItemCardProps>> => {
  const res = await axios.get<ApiResponse<ItemCardProps>>(
    `${API_URL}/tv/${type}?language=ko-KR&page=${page}`,
    API_OPTIONS
  );

  return res.data;
};

export const fetchKoreanTvs = async (
  type: "popular" | "top_rated" | "on_the_air",
  setState: React.Dispatch<React.SetStateAction<ItemCardProps[]>>,
  seenIds: React.RefObject<Set<number>>,
  pageRef: React.RefObject<number>,
  maxCount: number = 20
) => {
  let count = 0;

  while (count < maxCount) {
    const { results, total_pages } = await fetchTvsByPage(type, pageRef.current);
    const uniqueList = results.filter((item) => item.origin_country?.includes("KR") && !seenIds.current.has(item.id));
    uniqueList.forEach((item) => seenIds.current.add(item.id));

    if (pageRef.current < total_pages) {
      pageRef.current += 1;
    }

    if (results.length === 0 || pageRef.current > total_pages) break;

    count += uniqueList.length;
    setState((prev) => {
      const totalResults = [...prev, ...uniqueList];
      return totalResults.length > maxCount ? totalResults.slice(0, maxCount) : totalResults;
    });
  }
};
