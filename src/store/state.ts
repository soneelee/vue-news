import { NewsItem } from "@/api";

const state = {
  news: [] as NewsItem[],
  ask: [],
  jobs: [],
  user: {},
  item: {},
  list: [],
};

export default state;
export type RootState = typeof state;
