import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const formatKoreanDate = (dataStr: string) => {
  try {
    const date = new Date(dataStr);
    return format(date, "yyyy년 MM월 dd일", { locale: ko });
  } catch {
    return dataStr;
  }
};

export const getMediaYear = (dataStr?: string) => {
  if (!dataStr) return "";
  return format(new Date(dataStr), "yyyy");
};

export const formatAirDates = (first: string, last?: string | null, nextEp?: unknown) => {
  if (!first) return "";

  const fommatedFirst = formatKoreanDate(first);
  const formattedLast = last ? formatKoreanDate(last) : null;

  if (nextEp) return `${fommatedFirst} ~`;
  if (!nextEp && first === last) return fommatedFirst;
  if (!nextEp && last && first !== last) return `${fommatedFirst} ~ ${formattedLast}`;

  return fommatedFirst;
};
