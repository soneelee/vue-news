import { NewsItem } from "@/api";
import { RootState } from "./state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

export default mutations;
type Mutations = typeof mutations;
export { Mutations, MutationTypes };
