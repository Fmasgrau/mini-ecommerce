import { FeatureState } from "./actions/types";

export const getCountValue = (state: FeatureState): number => state.count.value;
