// store/types.ts
import { CommitOptions, Store } from "vuex";
import { RootMutations } from "./mutations";
import { RootState } from "./state";

type MyMutations = {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<RootMutations[K]>;
};

export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations;
