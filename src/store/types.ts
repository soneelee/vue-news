// store/types.ts
import { CommitOptions, DispatchOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";
import { Actions } from "./actions";

type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export type MyActions = {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
    payloadWithType: P,
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

export type MyStore = Omit<Store<RootState>, "commit" | "dispatch"> &
  MyMutations &
  MyActions;
