import { persisted  } from "svelte-persisted-store"

export interface AppConfig {
  startOfWeek: number,
  // dayRange: HourRange,
  // lunchRange: HourRange,
  // dinnerRange: HourRange,
  // timeBlockBoundary: HourRange[],
  // minimumBlockSize: number,
  locale: string,
}

export const config = persisted<AppConfig>('config', {
  startOfWeek: 1,
  locale: 'ko-KR',
});
